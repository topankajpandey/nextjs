"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
    const pathname = usePathname();
    const router = useRouter();
    const trigger = useRef<any>(null);
    const sidebar = useRef<any>(null);
    const [isUser, setIsUser] = useState(false);

    let storedSidebarExpanded = "true";
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null
            ? false
            : storedSidebarExpanded === "true"
    );

    useEffect(() => {
        const currentUser = JSON.parse(
            localStorage.getItem("currentUser") as any
        );
        if (currentUser && currentUser.length) {
            setIsUser(true);
        }
    }, []);

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }: MouseEvent) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ key }: KeyboardEvent) => {
            if (!sidebarOpen || key !== "Escape") return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    });

    useEffect(() => {
        localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector("body")?.classList.add("sidebar-expanded");
        } else {
            document
                .querySelector("body")
                ?.classList.remove("sidebar-expanded");
        }
    }, [sidebarExpanded]);

    const handleLinkClick = () => {
        //dispatch(searchRecord(""));
        router.push("/");
    };

    return (
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
            <ul className="mb-6 flex flex-col">
                <li>
                    <div
                        onClick={handleLinkClick}
                        className={`homepage_sidebar group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
                            pathname === "/" && "text-white"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="11.167"
                            height="13.078"
                            viewBox="0 0 11.167 13.078"
                        >
                            <path
                                id="Path_5"
                                data-name="Path 5"
                                d="M1.5,12.5H3.786V7.547H8.209V12.5H10.5V5.249L6,1.858,1.5,5.249ZM.414,13.582V4.707L6,.5l5.583,4.2v8.875H7.126V8.63H4.869v4.952Z"
                                transform="translate(-0.414 -0.504)"
                                fill="#fff"
                            />
                        </svg>
                    </div>
                </li>
                {isUser && (
                    <>
                        <li>
                            <Link
                                href="/conversation"
                                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                    pathname.includes("conversation") &&
                                    "bg-graydark dark:bg-meta-4"
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11.167"
                                    height="13.078"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        id="Path_13"
                                        data-name="Path 13"
                                        d="M6,9a.982.982,0,1,0-.713-.288A.968.968,0,0,0,6,9Zm4,0a.982.982,0,1,0-.712-.288A.968.968,0,0,0,10,9Zm4,0a.982.982,0,1,0-.712-.288A.968.968,0,0,0,14,9ZM0,20V2A1.926,1.926,0,0,1,.587.587,1.926,1.926,0,0,1,2,0H18a1.926,1.926,0,0,1,1.413.587A1.926,1.926,0,0,1,20,2V14a2.006,2.006,0,0,1-2,2H4Z"
                                        fill="#fff"
                                    ></path>
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/user"
                                className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                                    pathname.includes("user") &&
                                    "bg-graydark dark:bg-meta-4"
                                }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="11.167"
                                    height="13.078"
                                    viewBox="0 0 19.012 20"
                                >
                                    <path
                                        id="Path_14"
                                        data-name="Path 14"
                                        d="M3,20V15.7A9.233,9.233,0,0,1,.788,12.663,8.771,8.771,0,0,1,0,9,8.679,8.679,0,0,1,2.625,2.625,8.679,8.679,0,0,1,9,0a8.892,8.892,0,0,1,5.538,1.837,8.358,8.358,0,0,1,3.137,4.788l1.3,5.125a.947.947,0,0,1-.175.863A.961.961,0,0,1,18,13H16v3a2.006,2.006,0,0,1-2,2H12v2H10V16h4V11h2.7l-.95-3.875a6.533,6.533,0,0,0-2.45-3.7A6.915,6.915,0,0,0,9,2,6.787,6.787,0,0,0,4.05,4.025,6.663,6.663,0,0,0,2,8.95a6.819,6.819,0,0,0,.612,2.85A7.5,7.5,0,0,0,4.35,14.2l.65.6V20Zm5-7h2l.15-1.25a2.088,2.088,0,0,0,.363-.175,1.565,1.565,0,0,0,.288-.225l1.15.5,1-1.7-1-.75a1.625,1.625,0,0,0,0-.8l1-.75-1-1.7-1.15.5a1.562,1.562,0,0,0-.288-.225,2.09,2.09,0,0,0-.363-.175L10,5H8L7.85,6.25a2.09,2.09,0,0,0-.362.175A1.562,1.562,0,0,0,7.2,6.65l-1.15-.5-1,1.7,1,.75a1.625,1.625,0,0,0,0,.8l-1,.75,1,1.7,1.15-.5a1.565,1.565,0,0,0,.288.225,2.088,2.088,0,0,0,.362.175Zm1-2.5A1.5,1.5,0,0,1,7.938,7.938a1.5,1.5,0,0,1,2.125,2.125A1.446,1.446,0,0,1,9,10.5Z"
                                        fill="#fff"
                                    ></path>
                                </svg>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Sidebar;

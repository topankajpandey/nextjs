"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, selectUserQuery } from "@/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Image from "next/image";

const UserRegister = () => {
    const [username, setUsername] = useState("");
    const [mobile, setMobile] = useState("");
    const [isUser, setIsUser] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>({});
    const dispatch = useAppDispatch();
    const router = useRouter();

    useEffect(() => {
        const currentUser = JSON.parse(
            localStorage.getItem("currentUser") as any
        );
        if (currentUser && currentUser.length) {
            setIsUser(true);
            setCurrentUser(currentUser[0]);
            console.log("available");
        }
    }, []);

    const registerUser = () => {
        localStorage.setItem(
            "currentUser",
            JSON.stringify([{ username: username, mobile: mobile }])
        );
        dispatch(User({ username: username, mobile: mobile } as any));
        router.push("/user");
    };

    const logoutUser = () => {
        localStorage.removeItem("currentUser");
        setIsUser(false);
    };

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            {!isUser && (
                <div className="available">
                    <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                        <h3 className="font-medium text-black dark:text-white">
                            Register User
                        </h3>
                    </div>
                    <div className="flex flex-col gap-5.5 p-6.5">
                        <div>
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Name
                            </label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div>
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                Mobile
                            </label>
                            <input
                                onChange={(e) => setMobile(e.target.value)}
                                type="number"
                                placeholder="Enter your mobile"
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div>
                            <button
                                onClick={() => registerUser()}
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Register new account
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isUser && (
                <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="relative z-20 h-35 md:h-65">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Current Registered User
                            </h3>
                        </div>
                        <div className="flex flex-col gap-5.5 p-6.5">
                            <div>
                                <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                                    {currentUser && currentUser.username}
                                </h3>

                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Mobile: {currentUser && currentUser.mobile}
                                </label>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    <button
                                        onClick={() => logoutUser()}
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Logout
                                    </button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserRegister;

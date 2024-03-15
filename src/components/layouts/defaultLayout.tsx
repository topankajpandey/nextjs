"use client";
import React, { useState, ReactNode, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const currentUser = JSON.parse(
            localStorage.getItem("currentUser") as any
        );
        if (!currentUser) {
            router.push("/");
        }
    }, [router]);

    return (
        <div className="flex h-screen overflow-hidden">
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <main>
                    <div className="relative flex min-h-screen">
                        <main className="bg-gray-200 flex flex-1 overflow-y-auto overflow-x-hidden">
                            <aside className=" left-custom-sidebar flex h-full w-72.5 flex-shrink-0 -translate-x-full flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0">
                                <Sidebar
                                    sidebarOpen={sidebarOpen}
                                    setSidebarOpen={setSidebarOpen}
                                />
                            </aside>
                            <div className="w-full">{children}</div>
                        </main>
                    </div>
                </main>
            </div>
        </div>
    );
}

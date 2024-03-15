"use client";
import "@/css/satoshi.css";
import "@/css/style.css";
import "@/css/custom.css";
//import { Provider } from "react-redux";

import { StoreProvider } from "./StoreProvider";

import React, { useState } from "react";
import Loader from "@/components/common/Loader";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

    return (
        <html lang="en">
            <body suppressHydrationWarning={true}>
                <div className="dark:bg-boxdark-2 dark:text-bodydark">
                    <StoreProvider>{children}</StoreProvider>
                </div>
            </body>
        </html>
    );
}

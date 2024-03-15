"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/layouts/defaultLayout";
import TabularData from "@/components/Tables/TabularDat";
//import { selectSearchQuery } from "@/lib/features/user/userSlice";
import { Metadata } from "next";

/* export const metadata: Metadata = {
    title: "Search | Results from AI",
    description: "",
}; */

type ApiResponse = {
    query: string;
    col_keys: string[];
    result: any[][];
};

interface ChartData {
    country: string;
    submission_count: number;
}

interface FormatedDataInterface {
    col_keys: string[];
    result: any[];
}

const User = () => {
    const tableData = [
        {
            conversation: "Social Media",
        },
        {
            conversation: "Politics",
        },
    ];
    return (
        <DefaultLayout>
            <div className="col-span-12 xl:col-span-8">
                <TabularData tableData={tableData} type="Conversation" />
            </div>
        </DefaultLayout>
    );
};

export default User;

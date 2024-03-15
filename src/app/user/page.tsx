"use client";
import React, { useEffect, useState } from "react";
import DefaultLayout from "@/components/layouts/defaultLayout";
import TabularData from "@/components/Tables/TabularDat";
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
            username: "John",
            mobile: "919455191852",
            conversation: "Social Media",
        },
        {
            username: "Rocky",
            mobile: "919056159750",
            conversation: "Politics",
        },
    ];
    return (
        <DefaultLayout>
            <div className="col-span-12 xl:col-span-8">
                <TabularData tableData={tableData} type="User" />
            </div>
        </DefaultLayout>
    );
};

export default User;

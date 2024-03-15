import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import DefaultLayout from "@/components/layouts/defaultLayout";

export const metadata: Metadata = {
    title: "Reg AI",
    description: "Self Service Augumented Analytics Platform",
};

const Home = () => {
    return (
        <>
            <DefaultLayout>
                <Dashboard />
            </DefaultLayout>
        </>
    );
};

export default Home;

import React, { useState, ChangeEvent } from "react";
import { cursorTo } from "readline";

interface TabularProps {
    tableData: any[];
    type: string;
}
interface chatDetails {
    username: string;
    mobile: string;
    conversation: string;
}

const TabularData: React.FC<TabularProps> = ({ tableData, type }) => {
    const [chatView, setchatView] = useState(false);
    const [isform, setIsform] = useState(false);
    const [username, setUsername] = useState<string>("");
    const [mobile, setMobile] = useState<string>("");
    const [conversation, setConversation] = useState<string>("");
    const [chatDetails, setChatDetails] = useState<chatDetails>();
    const [selectedOption, setSelectedOption] = useState<string>("");

    const formatColumnName = (columnName: string) => {
        return columnName
            .replace(/_/g, " ")
            .replace(/\b\w/g, (firstChar) => firstChar.toUpperCase());
    };

    const createHander = () => {
        setIsform(true);
    };

    const create = (type: string) => {
        if (type === "User") {
            console.log("username", username);
            console.log("mobile", mobile);
            console.log("selectedOption", selectedOption);
        } else {
            console.log("conversation", conversation);
        }
        setIsform(false);
    };

    const joinConversation = (obj: chatDetails) => {
        setchatView(true);
        setChatDetails(obj);
        console.log("obj", obj);
    };

    return (
        <>
            {!chatView && (
                <div className="search-record-data mx-auto w-full">
                    {!isform && (
                        <div className="first-child relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                            <div className="second-child mb-0 rounded-t border-0 px-4 py-3">
                                <div className="flex flex-wrap items-center">
                                    <div className="left-heading-bar relative w-full max-w-full flex-1 flex-grow px-4 text-base font-semibold text-black">
                                        <h3 className="text-blueGray-700 text-base font-semibold">
                                            {type} Listing
                                        </h3>
                                    </div>
                                    <div className="relative flex w-full max-w-full flex-1 flex-grow justify-end gap-4   px-4 text-right">
                                        <div
                                            className="cursor-pointer"
                                            onClick={createHander}
                                        >
                                            Create {type}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {type === "User" && (
                                <div className="table-parent block w-full overflow-x-auto">
                                    <table className="w-full border-collapse items-center bg-transparent text-base font-semibold text-black">
                                        <thead>
                                            <tr>
                                                <th>Users</th>
                                                <th>Mobile</th>
                                                <th>Conversation</th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {tableData.map(
                                                (row: any, key: number) => (
                                                    <tr key={key}>
                                                        <td className="text-center align-middle text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                                                            {row.username}
                                                        </td>
                                                        <td className="text-center align-middle text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                                                            {row.mobile}
                                                        </td>
                                                        <td className="text-center align-middle text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                                                            {row.conversation}
                                                        </td>
                                                        <td className="text-center align-middle text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                                                            <button
                                                                onClick={() =>
                                                                    joinConversation(
                                                                        row
                                                                    )
                                                                }
                                                                type="button"
                                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                            >
                                                                Join Converstion
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            )}

                                            {tableData.length === 0 && (
                                                <tr>
                                                    <td
                                                        className="text-center align-middle p-4"
                                                        colSpan={2}
                                                        align="center"
                                                    >
                                                        {" "}
                                                        No Record Found...
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {type === "Conversation" && (
                                <div className="table-parent block w-full overflow-x-auto">
                                    <table className="w-full border-collapse items-center bg-transparent text-base font-semibold text-black">
                                        <thead>
                                            <tr>
                                                <th>Conversation</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {tableData.map(
                                                (row: any, key: number) => (
                                                    <tr key={key}>
                                                        <td className="text-blueGray-700 whitespace-nowrap border-l-0 border-r-0 border-t-0 p-4 px-6 text-left align-middle text-xs">
                                                            {row.conversation}
                                                        </td>
                                                    </tr>
                                                )
                                            )}

                                            {tableData.length === 0 && (
                                                <tr>
                                                    <td
                                                        className="p-4"
                                                        colSpan={1}
                                                        align="center"
                                                    >
                                                        {" "}
                                                        No Record Found...
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    )}

                    {isform && (
                        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                            <div className="available">
                                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Create {type}
                                    </h3>
                                </div>
                                {type === "User" && (
                                    <div className="flex flex-col gap-5.5 p-6.5">
                                        <div>
                                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                                Name
                                            </label>
                                            <input
                                                onChange={(e) => {
                                                    setUsername(e.target.value);
                                                }}
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
                                                onChange={(e) => {
                                                    setMobile(e.target.value);
                                                }}
                                                type="number"
                                                placeholder="Enter your mobile"
                                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>

                                        <div>
                                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                                Conversation
                                            </label>
                                            <select
                                                value={selectedOption}
                                                onChange={(e) => {
                                                    setSelectedOption(
                                                        e.target.value
                                                    );
                                                }}
                                                className={`relative z-20 w-50 appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input`}
                                            >
                                                {[
                                                    "Regulatory",
                                                    "Submission",
                                                    "Labelling",
                                                    "RIMS",
                                                ].map((opt, i) => (
                                                    <option
                                                        key={opt}
                                                        value={opt}
                                                    >
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <button
                                                onClick={() => create(type)}
                                                type="button"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {type === "Conversation" && (
                                    <div className="flex flex-col gap-5.5 p-6.5">
                                        <div>
                                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                                Conversation Title
                                            </label>
                                            <input
                                                onChange={(e) =>
                                                    setConversation(
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                placeholder="Enter conversation title"
                                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            />
                                        </div>

                                        <div>
                                            <button
                                                onClick={() => create(type)}
                                                type="button"
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {chatView && (
                <div className="search-record-data mx-auto w-full">
                    <div className="container mx-auto shadow-lg rounded-lg">
                        <div className="chatWindow px-5 py-2 flex justify-between items-center bg-white border-b-2">
                            <div className="font-semibold text-2xl">
                                {chatDetails?.conversation}
                            </div>
                            <h6
                                onClick={() => setchatView(false)}
                                className="text-1xl"
                            >
                                Go Conversation
                            </h6>
                        </div>

                        <div className="flex flex-row justify-between bg-white">
                            <div className="w-full px-5 flex flex-col justify-between">
                                <div className="flex flex-col mt-5">
                                    <div className="flex justify-end mb-4">
                                        <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                            Welcome to group everyone !
                                            <div className="text-sm text-gray-500">
                                                12:30 PM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start mb-4">
                                        <div className="ml-2 py-3 px-4 bg-green-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            <div className="text-sm text-gray-500">
                                                12:30 PM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start mb-4">
                                        <div className="ml-2 py-3 px-4 bg-green-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            <div className="text-sm text-gray-500">
                                                12:30 PM
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-end mb-4">
                                        <div>
                                            <div className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                                Lorem ipsum dolor, sit amet
                                                consectetur adipisicing elit.
                                                Magnam, repudiandae.
                                                <div className="text-sm text-gray-500">
                                                    12:30 PM
                                                </div>
                                            </div>

                                            <div className="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Debitis, reiciendis!
                                                <div className="text-sm text-gray-500">
                                                    12:30 PM
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-start mb-4">
                                        <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
                                            happy holiday guys!
                                        </div>
                                    </div>
                                </div>
                                <div className="py-5">
                                    <input
                                        className="w-full bg-gray-300 py-5 px-3 rounded-xl border border-solid border-black"
                                        type="text"
                                        placeholder="Type your message here..."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default TabularData;

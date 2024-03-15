import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState<any>({});
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        const currentUser = JSON.parse(
            localStorage.getItem("currentUser") as any
        );
        if (currentUser && currentUser.length) {
            setCurrentUser(currentUser[0]);
            setIsUser(true);
        }
    }, []);

    return (
        <div className="relative">
            {isUser && (
                <Link
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center"
                    href="#"
                >
                    <span className="h-12 w-12 rounded-full">
                        <Image
                            width={112}
                            height={112}
                            src={"/images/user/user-01.png"}
                            style={{
                                width: "auto",
                                height: "auto",
                            }}
                            alt="User"
                        />
                    </span>
                    <span className="hidden text-right lg:block">
                        <span className="block text-sm font-medium text-black dark:text-white">
                            {currentUser && currentUser.username}
                        </span>
                    </span>
                </Link>
            )}
        </div>
    );
};

export default DropdownUser;

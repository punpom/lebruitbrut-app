'use client';

import { useCallback, useState } from "react";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

interface MenuBarProps {
    currentUser?: User | null;
}

const MenuBar: React.FC<MenuBarProps> = ({ currentUser }) => {

    const [user, setUser] = useState(false);

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, []);

    return (
    <div> 
        <div 
        onClick={toggleOpen}
        className="
        cursor-pointer 
        border-2 
        rounded-full 
        border-gray-300
        ">
            <Avatar/>
        </div> 
        {isOpen && (
            <div
            className="
            absolute
            w-48
            rounded-md
            bg-white
            overflow-hidden
            text-sm
            top-14
            sm:right-6
            md:right-12
            xl:right-24
            border
            shadow-sm
            ">
                <div className="flex flex-col cursor-pointer">
                    {currentUser ? (
                        <>
                            <MenuItem
                            onClick={() => router.push("/")}
                            label="Profile"/>
                            <MenuItem
                            onClick={() => router.push("/")}
                            label="Favorites"/>
                            {currentUser.isAdmin && (
                                <MenuItem
                                onClick={() => router.push("/")}
                                label="Dashboard"/>
                            )}
                            <MenuItem
                            onClick={() => router.push("/")}
                            label="Settings"/>
                            <MenuItem
                            onClick={() => router.push("/")}
                            label="Log-out"/>
                        </>
                    ) : (
                        <>
                            <MenuItem
                            onClick={() => router.push("/")}
                            label="Login"/>
                            <MenuItem
                            onClick={() => router.push("/")}
                            label="Sign-up"/>
                        </>
                )}
                </div>
            </div>
        )}
    </div>
    );
}
 
export default MenuBar;
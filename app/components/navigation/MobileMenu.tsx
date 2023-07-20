'use client';

import { User } from '@prisma/client';
import { useCallback, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';

interface MobileMenuProps {
    currentUser?: User | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentUser }) => {

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, [])
    return ( 
        <div>
            <div className='cursor-pointer' onClick={toggleOpen}>
                {isOpen ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
            </div> 
            {isOpen && (
                <div
                className="
                absolute
                w-full
                bg-white
                overflow-hidden
                text-sm
                top-16
                left-0
                border
                shadow-sm
                ">
                    <div className="flex flex-col cursor-pointer">
                    {currentUser ? (
                        <>
                            <MenuItem
                            onClick={() => router.push("/")}
                            label="Home"/>
                            <MenuItem
                            onClick={() => router.push("/about")}
                            label="About me"/>
                            <MenuItem
                            onClick={() => router.push("/contact")}
                            label="Contact"/>
                            <hr/>
                            <MenuItem
                            onClick={() => router.push("/profile")}
                            label="Profile"/>
                            <MenuItem
                            onClick={() => router.push("/favorites")}
                            label="Favorites"/>
                            {currentUser.isAdmin && (
                                <MenuItem
                                onClick={() => router.push("/dashboard")}
                                label="Dashboard"/>
                            )}
                            <MenuItem
                            onClick={() => router.push("/settings")}
                            label="Settings"/>
                            <MenuItem
                            onClick={() => router.push("")}
                            label="Log-out"/>
                        </>
                    ) : (
                        <>
                            <MenuItem
                            onClick={() => router.push("/")}
                            label="Home"/>
                            <MenuItem
                            onClick={() => router.push("/about")}
                            label="About me"/>
                            <MenuItem
                            onClick={() => router.push("/contact")}
                            label="Contact"/>
                            <hr/>
                            <MenuItem
                            onClick={() => router.push("/login")}
                            label="Login"/>
                            <MenuItem
                            onClick={() => router.push("/register")}
                            label="Sign-up"/>
                        </>
                )}
                    </div>
                </div>
            )}
            <div>
            </div>
        </div>
    );
}
 
export default MobileMenu;
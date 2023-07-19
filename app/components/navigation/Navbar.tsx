'use client';

import Avatar from "../Avatar";
import Container from "../Container";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    return ( 
    <div className="
    w-full 
    bg-white
     shadow-sm
     ">
        <div className="py-5">    
            <Container>     
                <div className="
                flex 
                flex-row 
                items-center 
                justify-between 
                gap-3 
                md:gap-0
                ">
 
                    <Logo/>
                    <Navigation/>
                    <div className="hidden sm:block">
                    <Avatar/>
                    </div>
                    <div className="sm:hidden">
                    <AiOutlineMenu size={25}/>
                    </div>
                </div>
            </Container>      
        </div>
    </div>
    );
}
 
export default Navbar;
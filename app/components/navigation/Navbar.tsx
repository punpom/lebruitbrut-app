'use client';

import Container from "../Container";
import Logo from "./Logo";
import MenuBar from "./MenuBar";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

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
                    <MenuBar/>
                    </div>
                    <div className="sm:hidden">
                        <MobileMenu/>
                    </div>
                </div>
            </Container>      
        </div>
    </div>
    );
}
 
export default Navbar;
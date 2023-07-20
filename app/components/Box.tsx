'use client';

interface BoxProps {
    children: React.ReactNode
}

const Box: React.FC<BoxProps> = ({ children }) => {
    return ( 
    <div className="w-full flex justify-center">
        <div className="
        absolute
        top-1/4
        bg-white 
        md:w-3/5
        lg:w-2/5
        xl:w-1/3
        w-3/4
        h-auto
        rounded-xl
        shadow-sm
    "> 
        {children}
    </div> 
    </div>
    );
}
 
export default Box;
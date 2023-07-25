'use client';

interface BoxProps {
    children: React.ReactNode
}

const Box: React.FC<BoxProps> = ({ children }) => {
    return ( 
    <div className="w-full flex justify-center">
        <div className="
        py-2
        absolute
        top-1/4
        bg-white 
        md:w-3/5
        lg:w-2/5
        xl:w-1/3
        sm:w-3/4
        w-full
        h-auto
        sm:rounded-xl
        shadow-sm
    "> 
        {children}
    </div> 
    </div>
    );
}
 
export default Box;
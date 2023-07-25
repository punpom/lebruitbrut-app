'use client';

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick
}) => {
    return ( 
    <button
    onClick={onClick}
    className="
    rounded-md
    text-white
    w-full
    py-4
    font-light
    bg-black
    "
    >   
        {label}
    </button> 
    );
}
 
export default Button;
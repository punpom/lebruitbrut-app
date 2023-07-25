'use client';

import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id, 
    label,
    type = 'text',
    disabled,
    required,
    register,
    errors
}) => {
    return ( 
        <div className="
        w-full
        relative
        flex
        flex-col
        "> 

<label className={`
        text-md
        text-black
        z-9
        ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>{label}</label>

<input 
        id={id} 
        disabled={disabled} 
        { ...register(id, {required})}
        placeholder=" "
        type={type}
        className={`
        w-full
        p-4
        pt-6
        font-light
        bg-white
        border
        border-black
        rounded-md
        outline-none
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${errors[id] ? 'border-rose-500' : 'border-neutral-300'}
        ${errors[id] ? 'focus:border-rose-500' : 'focus:border-black'}  
        `}
        />

        </div>
     );
}
 
export default Input;
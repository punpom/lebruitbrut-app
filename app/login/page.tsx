'use client';

import { useRouter } from "next/navigation";
import Box from "../components/Box";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";

import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';

const LoginPage = () => {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    })

    return ( 
    <Box> 
        <div className="flex flex-col gap-4 py-4">
        <Heading title="Login" subtitle="Here you can login" center/>
                <div className="w-1/2 relative m-auto py-4 ">
                    <Input id="username" label="Username" register={register} errors={errors}/>
                    <div className="m-4"/>
                    <Input id="password" label="Password" register={register} errors={errors}/>
                    <div className="m-6"/>
                    <Button label="Submit" onClick={() => {}}/>
                </div>
                <div>
                    <hr className="w-5/6 m-auto py-4"/>
                    <p className="text-center">You don&apos;t have an account? <b className="cursor-pointer" onClick={() => router.push('/register')}>Click here to register</b></p>
                </div>
            </div>
    </Box> 
    );
}
 
export default LoginPage;
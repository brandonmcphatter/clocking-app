'use client';

import React, {useState} from 'react';
import Image from "next/image";
import WorkingPic from '/public/working_stock_pic.jpg';
import {useRouter} from "next/navigation";
import Link from "next/link";
import FormInput from "@/components/login-signup/FormInput";


function LoginSection() {
    const router = useRouter;
    const [userEmail, setUserEmail] = useState('billgates@msoft.com');
    const [userPassword, setUserPassword] = useState('12345');

    return (


        <div className="bg-gray-100 flex justify-center items-center h-screen ">
            {/*Left Image*/}
            <div className="w-1/2 h-screen hidden lg:block">
                <Image src={WorkingPic}
                     alt="People Working" className="object-cover w-full h-full"/>
            </div>
            {/*Right Login Form*/}
            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form action="#" method="POST">
                    {/*Email Input*/}
                    <FormInput label={'Email'} name={'email'} type={'email'}/>
                    {/*Password Input*/}
                    <FormInput label={'Password'} name={'password'} type={'password'}/>
                    {/*Remember me Checkbox */}
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-blue-500" />
                            <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                    </div>
                   {/*Forgot Password Link*/}
                    <div className="mb-6 text-blue-500">
                        <a href="#" className="hover:underline">Forgot Password?</a>
                    </div>
                    {/*Login Button */}
                    <button type="submit"
                            className="bg-gray-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full">Login
                    </button>
                </form>
                {/*Sign Up Link */}
                <div className="mt-6 text-sm text-center">
                    <span className={'text-gray-500 dark:text-gray-300'}>New User? Sign up </span>
                    <Link href={'/signup'} className="hover:underline text-blue-500">Here</Link>
                </div>
            </div>
        </div>
)
}

export default LoginSection;
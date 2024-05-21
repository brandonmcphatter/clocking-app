'use client';

import React, {useState} from 'react';
import Image from "next/image";
import WorkingPic from '/public/working_stock_pic.jpg';
import Link from "next/link";
import FormInput from "@/components/login-signup/FormInput";
import {supabase} from "@/services/supabase";
import {useRouter} from "next/navigation";

export default function LoginSection() {
    const [email, setEmail] = useState('bob@gmail.com');
    const [password, setPassword] = useState('password');
    const [error, setError] = useState('');

    const router = useRouter()

    async function loginWithPassword(e){
        e.preventDefault();
        setError('');
        try {
            const { user, session, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                setError(error.message);
                return;
            }

            // Handle successful login (e.g., redirect to dashboard)
            console.log('User:', user);
            console.log('Session:', session);
            alert('Login successful!');
            router.push('account/dashboard');
        } catch (error) {
            console.error('Error:', error.message);
            setError('An unexpected error occurred.');
        }
    }

    return (
        <div className="flex justify-center items-center sm:h-3/4 lg:h-screen sm:mt-20 lg:mt-0">
            {/*Left Image*/}
            <div className="w-1/2 h-screen hidden lg:block">
                <Image src={WorkingPic}
                       alt="People Working" className="object-cover w-full h-full" priority={true}/>
            </div>
            {/*Right Login Form*/}
            <div className="lg:p-36 md:px-48 md:py-10 sm:px-20 px-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Login</h1>
                <form onSubmit={loginWithPassword}>
                    {/*Email and Password*/}
                    <FormInput label={'Email'} name={'email'} type={'email'} value={email} set={e=>setEmail(e.target.value)}/>
                    <FormInput label={'Password'} name={'password'} type={'password'} value={password} set={e=>setPassword(e.target.value)}/>
                    <div className="mb-4 flex items-center">
                        <input type="checkbox" id="remember" name="remember" className="text-blue-500"/>
                        <label htmlFor="remember" className="text-gray-600 ml-2">Remember Me</label>
                    </div>
                    {/*Forgot Password Link*/}
                    <div className="mb-6 text-blue-500">
                        <a href="#" className="hover:underline">Forgot Password?</a>
                    </div>
                    {/*Login Button */}
                    <button type="submit"
                            className="bg-gray-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full">
                        Login
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
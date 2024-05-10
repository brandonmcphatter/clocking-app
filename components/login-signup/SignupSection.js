import Image from "next/image";
import SignupPic from "@/public/signup_img.jpg";
import FormInput from "@/components/login-signup/FormInput";
import React from "react";
import Link from "next/link";

export default function SignupSection() {
    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            {/*Left Image*/}
            <div className="w-1/2 h-screen hidden lg:block">
                <Image src={SignupPic}
                       alt="People Working" className="object-cover w-full h-full"/>
            </div>
            {/*Right Signup Form*/}
            <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
                <h1 className="text-2xl font-semibold mb-4">Signup</h1>
                <form action="#" method="POST">
                    {/*First Name Input*/}
                    <FormInput label={'First Name'} name={'firstName'} type={'text'}/>
                    {/*Last Name Input*/}
                    <FormInput label={'Last Name'} name={'lastName'} type={'text'}/>
                    {/*Email Input*/}
                    <FormInput label={'Email'} name={'email'} type={'email'}/>
                    {/*Password Input*/}
                    <FormInput label={'Password'} name={'password'} type={'password'}/>
                    {/*Confirm Password Input*/}
                    <FormInput label={'Confirm Password'} name={'confirmPassword'} type={'password'}/>
                    {/*Register Button */}
                    <button type="submit"
                            className="bg-gray-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full">Register
                    </button>
                </form>
                {/*Sign Up Link */}
                <div className="mt-6 text-blue-500 text-center">
                    <span className="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
                    <Link href={"/login"} className="hover:underline text-sm">Login Here</Link>
                </div>
            </div>
        </div>
    )
}
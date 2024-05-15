import AccountInput from "@/components/account/edit/AccountInput";
import React from "react";

import SaveButton from "@/components/account/edit/SaveButton";

export default function EditAccountPage() {

    return (
        <>
            <div className="lg:p-36 md:p-28 sm:20 p-8 w-full">
                <h1 className=" text-center text-3xl font-semibold mb-4">Edit Account</h1>
                <form action="#" method="POST">
                    <h2 className={'text-2xl font-semibold mb-4'}>Personal:</h2>
                    <div className={'w-full flex flex-wrap'}>
                        {/*First Name Input*/}
                        <AccountInput label={'First Name'} name={'firstName'} type={'text'} value={'William'}/>
                        {/*Last Name Input*/}
                        <AccountInput label={'Last Name'} name={'lastName'} type={'text'} value={'Richardson'}/>
                        {/*Email Input*/}
                        <AccountInput label={'Email'} name={'email'} type={'email'} value={'willrichardson1@gmail.com'}/>
                        {/*Password Input*/}
                        <AccountInput label={'Password'} name={'password'} type={'password'} value={'password'}/>
                    </div>

                    <hr className={'my-3'}/>

                    {/*Save Button */}
                    <SaveButton />
                </form>
            </div>
        </>
    )
}
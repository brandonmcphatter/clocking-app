import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import AccountPayDetail from "@/components/account/AccountPayDetail";
import AccountDetail from "@/components/account/AccountDetail";
import AccountEmailDetail from "@/components/account/AccountEmailDetail";


export default function AccountPage() {
    return (
        <>
            <div className="lg:p-36 md:p-24 sm:20 p-8 w-full">
                <h1 className=" text-center text-3xl font-semibold mb-4">Account</h1>
                <div>
                    <h2 className={'text-2xl font-semibold mb-4'}>Personal:</h2>
                    <div className={'w-full flex flex-wrap'}>
                        {/*First Name Input*/}
                        <AccountDetail label={'First Name'} name={'firstName'} value={'William'}/>
                        {/*Last Name Input*/}
                        <AccountDetail label={'Last Name'} name={'lastName'} value={'Richardson'}/>
                        {/*Email Input*/}
                        <AccountEmailDetail label={'Email'} name={'email'} value={'willrichardson1@gmail.com'}/>

                        {/*Edit Button */}
                    <Link href={'/account/edit'} className={'w-full'}>
                        <button type="submit" className="bg-gray-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-3 text-xl">
                            <span className={'mr-3'}>Edit</span>
                            <span><FontAwesomeIcon icon={faPencil} /></span>
                        </button>
                    </Link>
                    </div>

                    <hr className={'mt-5 mb-3'}/>

                    <h2 className={'text-2xl font-semibold mb-4'}>Work:</h2>
                    <div className={'w-full flex flex-wrap'}>
                        {/*Company Input*/}
                        <AccountDetail label={'Company'} name={'company'} value={'Wal-Mart'}/>
                        {/*Position Input*/}
                        <AccountDetail label={'Position'} name={'position'} value={'Cashier'}/>
                        {/*Pay Input*/}
                        <AccountPayDetail label={'Pay Rate'} name={'pay'} value={3} readOnly={true} />
                        {/*Hire Date Input*/}
                        <AccountDetail label={'Hire Date'} name={'hireDate'} type={'date'} value={'03/01/2024'}/>
                    </div>

                </div>
            </div>
        </>
    )
}
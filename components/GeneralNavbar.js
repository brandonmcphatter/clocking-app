'use client';
import React, {useState} from 'react';

import Link from "next/link";
import 'animate.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

export default function GeneralNavbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className={"flex items-center justify-between p-4 lg:px-8"} style={{backgroundColor: "#e1dad3"}}>
                <div className={"flex md:flex-1"}>
                    <Link href="/" className={"-m-1.5 p-1.5"}>
                        {/*<Image className={"h-8 w-auto"} src={clockLogo}*/}
                        {/*       alt={"logo"}/>*/}
                        <FontAwesomeIcon icon={faClock} size={'2xl'} color={'gray'} />
                    </Link>
                </div>
                {/*Mobile Menu Button*/}
                <div className={"flex md:hidden"}>
                    <button onClick={() => setIsOpen(!isOpen)} type="button"
                            className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700`}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>
                    </button>
                </div>

                {/*Medium Navbar Links*/}
                <div className="hidden md:flex md:gap-x-8 lg:gap-x-12">
                    <Link href={'company'} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Company</Link>
                    <Link href={'features'} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">Features</Link>
                    <Link href={'/faq'} className="text-sm font-semibold leading-6 text-gray-900 hover:underline">F.A.Q.</Link>
                </div>

                <div className="hidden md:flex md:flex-1 md:justify-end">
                    <button>
                        <Link href={'/login'} className="text-sm font-semibold leading-6 text-gray-900">
                            <span>Log in </span>
                            <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </button>
                </div>
            </nav>

            {/*Mobile Hamburger Links*/}
            <div className={`${isOpen ? 'md:hidden' : 'hidden'} flex items-center flex-col mt-3`}>
                <Link href={'/company'}  className="text-sm font-semibold leading-6 text-gray-900 w-1/2 text-center py-1 my-1 rounded bg-gray-400 hover:bg-transparent">Company</Link>
                <Link href={'/features'} className="text-sm font-semibold leading-6 text-gray-900 w-1/2 text-center py-1 my-1 rounded bg-gray-400 hover:bg-transparent">Features</Link>
                <Link href={'/faq'}      className="text-sm font-semibold leading-6 text-gray-900 w-1/2 text-center py-1 my-1 rounded bg-gray-400 hover:bg-transparent">F.A.Q.</Link>
                <Link href={'/login'}    className="text-sm font-semibold leading-6 text-gray-900 w-1/2 text-center py-1 my-1 rounded bg-gray-400 hover:bg-transparent">Sign Up / Log In</Link>
            </div>


        </>
    );
}

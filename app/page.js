import Image from "next/image";
import ClockLogo from '/public/clocking-logo.png'
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/UI/NavBar";


export default function Home() {
    return (
        <>
            <main className={'d-flex justify-content-between align-items-center'}>
            <LoginBox/>
            </main>

        </>
    )
        ;
}

function LoginBox() {
    return (
        <div className={'container border border-black my-5 w-50'}>
            <form action="" className={'d-flex justify-content-center align-items-center flex-column row'}>
                {/*email*/}
                <div className={'d-flex justify-content-center'}>
                    <label htmlFor="emailInput" className={''}>email:</label>
                    <input type="text"/>
                </div>

                {/*password*/}
                <div className={'d-flex justify-content-center'}>
                    <label htmlFor="passwordInput">password:</label>
                    <input type="password"/>
                </div>

                <div className={'d-flex justify-content-center'}>
                    <button>LOGIN</button>
                </div>
            </form>
        </div>
    )
}



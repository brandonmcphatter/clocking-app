import React from 'react';
import Link from "next/link";
import Image from "next/image";
import ClockLogo from "@/public/clocking-logo.png";
import styles from './Navbar.module.css';
function Navbar() {

    return (
        <nav className="navbar navbar-light bg-warning  py-1 mb-5">
            <div className="container d-flex">
                <div className={`${styles.navSection1}`}>
                    <Link href={'/'} style={{textDecoration: 'none'}}>
                        <h1 className={''}>CLOCKING</h1>
                    </Link>
                </div>

                <div className={`${styles.navSection2}`}>
                    <Image src={ClockLogo} alt={'Clock'} width={50} height={50} />
                </div>

                <div className={`${styles.navSection3}`}>
                    <h1>Menu</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
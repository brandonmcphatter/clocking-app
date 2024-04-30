import React from 'react';
import Image from "next/image";
import ClockLogo from "@/public/clocking-logo.png";

function Footer() {
    return (
        <div className="container position-absolute bottom-0 start-50 translate-middle-x">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2024 The Clocking Company, Inc</p>

                <a href="/">
                    <Image src={ClockLogo} alt={'Clock'} width={30} height={30}/>
                </a>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>

                </ul>
            </footer>
        </div>
    );
}

export default Footer;
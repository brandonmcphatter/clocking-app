'use client';
import React, {useState} from 'react';
import styles from './LoginBox.module.css';
import {redirect} from "next/navigation";


function LoginBox() {

    const [userEmail, setUserEmail] = useState('billgates@msoft.com');
    const [userPassword, setUserPassword] = useState('12345');
    const stockUser = {
        firstName: 'Bill',
        lastName: 'Gates',
        email: 'billgates@msoft.com',
        password: '12345'
    }
    function checkLogin() {
        // if (stockUser.email === userEmail && stockUser.password === userPassword) {
        //     redirect('/home')
        // } else {
        //     alert('incorrect login info');
        // }

        console.log(userEmail + ' ' + userPassword)
    }
    return (
        <div className={styles.loginBox}>
            <h3 className={' mb-1'}>Sign In</h3>
            <h6 className={' mb-4'}>Let's get to work!</h6>
            <form action={''} method={'post'} className={'d-flex justify-content-center align-items-center flex-column row gap-4'}>
                {/*email*/}
                <div className={'d-flex justify-content-center'}>

                    <input name={'email'} type="text" placeholder={'email'} className={styles.inputs} value={userEmail} onChange={event => setUserEmail(event.target.value)}/>
                </div>

                {/*password*/}
                <div className={'d-flex justify-content-center'}>

                    <input name={'password'} type={'text'} placeholder={'password'} className={styles.inputs} value={userPassword} onChange={event => setUserPassword(event.target.value)}/>
                </div>

                <div className={'d-flex justify-content-center'}>
                </div>
            </form>
                    <button onClick={checkLogin} className={styles.loginButton}>Sign In</button>
        </div>
    )
}

export default LoginBox;
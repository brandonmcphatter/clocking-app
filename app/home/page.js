'use client';

import React from 'react';

function HomePage() {

    function showTimeIn(){
        const date = new Date();
        const time = date.toLocaleTimeString();
        alert('Punched In At ' + time);
    }
    function showTimeOut(){
        const date = new Date();
        const time = date.toLocaleTimeString();
        alert('Punched Out At ' + time);
    }


    return (
        <div className="container">
            {/*hours worked - pay period - prev pay period section*/}
            <div className="container">

            </div>

            {/*clock in button */}
            <div className="container">
                <button onClick={showTimeIn}>Punch In</button>
            </div>

            {/*clock out button */}
            <div className="container">
                <button onClick={showTimeOut}>Punch Out</button>
            </div>

            {/*Mon - Fri details section*/}
            <div className="container">

            </div>
        </div>

    );
}

export default HomePage;
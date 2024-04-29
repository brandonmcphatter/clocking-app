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

            {/*top container for clock in - clock out functionality*/}
            <div className={'container d-flex justify-content-center gap-3'}>

                {/*clock in button */}
                <div className="container bg-primary w-50">
                    <button onClick={showTimeIn}>Punch In</button>
                </div>

                {/*clock out button */}
                <div className="container bg-danger w-50">
                    <button onClick={showTimeOut}>Punch Out</button>
                </div>
            </div>

            {/*Mon - Fri details section*/}
            <div className="container border border-primary border-3">
                <div className={'d-flex justify-content-between row text-decoration-underline'}>
                    <div className={'col-md-3'}>Date</div>
                    <div className={'col-md-3'}>Time In</div>
                    <div className={'col-md-3'}>Time Out</div>
                    <div className={'col-md-3'}>Total Hours</div>
                </div>
                <div className={'d-flex justify-content-between row'}>
                    <div className={'col-md-3'}>7/4/24</div>
                    <div className={'col-md-3'}>08:00am</div>
                    <div className={'col-md-3'}>05:00pm</div>
                    <div className={'col-md-3'}>9.0</div>
                </div>
            </div>
        </div>

    );
}

export default HomePage;
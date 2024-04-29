'use client';

import React from 'react';

function HomePage() {

    function showTimeIn() {
        const date = new Date();
        const time = date.toLocaleTimeString();
        alert('Punched In At ' + time);
    }

    function showTimeOut() {
        const date = new Date();
        const time = date.toLocaleTimeString();
        alert('Punched Out At ' + time);
    }


    return (
        <div className="container d-flex flex-column gap-5 ">
            {/*hours worked - pay period - prev pay period section*/}
            <div className="container d-flex">
                <div className="card" style={{width: '33%'}}>
                    <div className="card-body">
                        <h5 className={'card-title'}>Pay Period</h5>
                        <div className={'display-1'}>7/1 - 7/15</div>
                    </div>
                </div>
                <div className="card" style={{width: '33%'}}>
                    <div className="card-body">
                        <h5 className={'card-title'}>Hrs Worked</h5>
                        <div className={'display-1'}>40</div>
                    </div>
                </div>

                <div className="card" style={{width: '33%'}}>
                    <div className="card-body">
                        <h5 className={'card-title'}>Gross Paycheck</h5>
                        <div className={'display-1'}>$1000.00</div>
                    </div>
                </div>
            </div>

            {/*top container for clock in - clock out functionality*/}
            <div className={'container d-flex justify-content-center gap-3'}>

                {/*clock in button */}
                <div className="container bg-primary w-50" style={{height: '25vh'}}>
                    <button onClick={showTimeIn} className={''}>Punch In</button>
                </div>

                {/*clock out button */}
                <div className="container bg-danger w-50" style={{height: '25vh'}}>
                    <button onClick={showTimeOut} className={''}>Punch Out</button>
                </div>
            </div>

            {/*Mon - Fri details section / Table */}
            <div className="container border border-primary border-3">

                {/*Table Headers*/}
                <div className={'d-flex justify-content-between row text-decoration-underline'}>
                    <div className={'col-md-3'}>Date</div>
                    <div className={'col-md-3'}>Time In</div>
                    <div className={'col-md-3'}>Time Out</div>
                    <div className={'col-md-3'}>Total Hours</div>
                </div>

                {/*Table Rows*/}
                <div className={'d-flex justify-content-between row'}>
                    <div className={'col-md-3'}>-</div>
                    <div className={'col-md-3'}>-</div>
                    <div className={'col-md-3'}>-</div>
                    <div className={'col-md-3'}>-</div>
                </div>
                <div className={'d-flex justify-content-between row'}>
                    <div className={'col-md-3'}>7/4/24</div>
                    <div className={'col-md-3'}>08:00am</div>
                    <div className={'col-md-3'}>05:00pm</div>
                    <div className={'col-md-3'}>9.0</div>
                </div>
                <div className={'d-flex justify-content-between row'}>
                    <div className={'col-md-3'}>7/4/24</div>
                    <div className={'col-md-3'}>08:00am</div>
                    <div className={'col-md-3'}>05:00pm</div>
                    <div className={'col-md-3'}>9.0</div>
                </div>
                <div className={'d-flex justify-content-between row'}>
                    <div className={'col-md-3'}>7/4/24</div>
                    <div className={'col-md-3'}>08:00am</div>
                    <div className={'col-md-3'}>05:00pm</div>
                    <div className={'col-md-3'}>9.0</div>
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
import React from "react";

export default function WorkSummarySection() {
    return (
        <section className={'m-2'}>
            {/*Header*/}
            <h2 className={'font-extrabold text-center mb-5'}>Work Summary</h2>

            {/*Cards for Date Hours and Wages*/}
            <div className={'flex flex-col md:flex-row gap-1.5'}>
                <PayPeriod />
                <HoursWorked />
                <GrossWages />

            </div>
        </section>
    )
}

function PayPeriod() {
    return (
        <div className={'p-2 flex-col content-between md:w-1/3  rounded-lg shadow drop-shadow shadow-gray-500 bg-gray-500'} >
            <div className={'md:text-3xl '}>Pay</div>
            <div className={'md:text-3xl flex justify-between'}>
                <div className={''}>Period:</div>
                <div className={'md:text-3xl text-end '}>
                    <span className={''}>4/1</span>
                    <span>-</span>
                    <span className={''}>4/15</span>
                </div>
            </div>
        </div>
    )
}

function HoursWorked({hoursWorked}) {
    return (
        <div className={'p-2 flex-col content-between md:w-1/3  rounded-lg shadow drop-shadow shadow-green-400 bg-gray-500'}>
            <div className={'md:text-3xl '}>Hours</div>
            <div className={'md:text-3xl flex justify-between'}>
                <div className={''}>Worked:</div>
                <div className={'md:text-3xl text-end '}>
                    <span className={''}>{hoursWorked ? hoursWorked : 0}</span>
                </div>
            </div>
        </div>
    )
}

function GrossWages({grossWages}) {
    return (
        <div className={'p-2 flex-col content-between md:w-1/3  rounded-lg shadow drop-shadow shadow-green-400 bg-gray-500'}>
            <div className={'md:text-3xl '}>Gross</div>
            <div className={'md:text-3xl flex justify-between'}>
                <div className={''}>Wages:</div>
                <div className={'md:text-3xl text-end '}>
                    <span className={''}>$ </span>
                    <span className={''}>{grossWages ? grossWages : 0}</span>
                </div>
            </div>
        </div>
    )
}
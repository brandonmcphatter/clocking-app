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

function GrossWages() {
    return (
        <div className={'p-2 flex-col content-between md:w-1/3  rounded-lg shadow drop-shadow shadow-green-400'} style={{backgroundColor: '#392F5A'}}>
            <div className={'md:text-3xl text-green-400'}>Gross</div>
            <div className={'md:text-3xl flex justify-between'}>
                <div className={'text-green-400'}>Wages:</div>
                <div className={'md:text-3xl text-end '}>
                    <span className={'text-green-400'}>$</span>
                    <span className={'text-white'}>500</span>
                </div>
            </div>
        </div>
    )
}

function HoursWorked() {
    return (
        <div className={'p-2 flex-col content-between md:w-1/3  rounded-lg shadow drop-shadow shadow-green-400'} style={{backgroundColor: '#392F5A'}}>
            <div className={'md:text-3xl text-green-400'}>Hours</div>
            <div className={'md:text-3xl flex justify-between'}>
                <div className={'text-green-400'}>Worked:</div>
                <div className={'md:text-3xl text-end '}>
                    <span className={'text-white'}>56</span>
                </div>
            </div>
        </div>
    )
}

function PayPeriod() {
    return (
        <div className={'p-2 flex-col content-between md:w-1/3  rounded-lg shadow drop-shadow shadow-green-400'} style={{backgroundColor: '#392F5A'}}>
            <div className={'md:text-3xl text-green-400'}>Pay</div>
            <div className={'md:text-3xl flex justify-between'}>
                <div className={'text-green-400'}>Period:</div>
                <div className={'md:text-3xl text-end '}>
                    <span className={'text-green-400'}>4/1</span>
                    <span>-</span>
                    <span className={'text-white'}>4/15</span>
                </div>
            </div>
        </div>
    )
}
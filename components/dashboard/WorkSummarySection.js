import React from "react";

export default function WorkSummarySection() {
    return (
        <section className={'mb-2'}>
            {/*Header*/}
            <h2 className={'font-extrabold text-center mb-5'}>Work Summary</h2>

            {/*Cards for Date Hours and Wages*/}
            <div className={'flex content-evenly gap-2'}>
                <div className={'p-3 flex-col content-between w-1/3 h-56 bg-gray-600 rounded-lg'}>
                    <div className={'text-5xl'}>Pay</div>
                    <div className={'text-5xl'}>Period:</div>
                    <div className={'mt-12 md:text-5xl text-end font-bold'}>05/01-05/15</div>
                </div>
                <div className={'p-3 flex-col content-between w-1/3 h-56 bg-gray-600 rounded-lg'}>
                    <div className={'text-5xl'}>Hours</div>
                    <div className={'text-5xl'}>Worked:</div>
                    <div className={'mt-12 md:text-5xl text-end font-bold'}>32</div>
                </div>
                <div className={'p-3 flex-col content-between w-1/3 h-56 bg-gray-600 rounded-lg'}>
                    <div className={'text-5xl'}>Gross</div>
                    <div className={'text-5xl'}>Earned:</div>
                    <div className={'mt-12 md:text-5xl text-end font-bold'}>$ <span>400</span></div>
                </div>

            </div>
        </section>
    )
}
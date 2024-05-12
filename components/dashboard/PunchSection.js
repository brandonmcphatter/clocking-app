

import WorkClock from "@/components/dashboard/WorkClock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBusinessTime} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function PunchSection() {
    return (
        <section className={'my-5 mx-2'}>
            <h2 className={'font-extrabold text-center mb-3'}>Clock In / Out</h2>
            <div className={'w-full flex gap-1'}>
                <PunchButton title={'Clock In'} buttonColor={'bg-green-800'} iconColor={'yellow'}/>
                <WorkClock/>
                <PunchButton title={'Clock Out'} buttonColor={'bg-blue-500'} iconColor={'red'}/>
            </div>
        </section>
    )
}

function PunchButton({title, buttonColor, iconColor}) {
    return (
        <div className={'w-1/2 md:w-1/4 h-full'}>
            <button className={`${buttonColor} w-full h-full rounded-lg py-2`}>
                <FontAwesomeIcon icon={faBusinessTime} color={iconColor} size={'4x'}/>
                <div className={'text-2xl text-white italic font-bold'}>{title}</div>
            </button>
        </div>
    )
}
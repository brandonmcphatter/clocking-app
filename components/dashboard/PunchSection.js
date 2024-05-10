'use client';

import WorkClock from "@/components/dashboard/WorkClock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBusinessTime} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function PunchSection() {
    return (
        <section className={'my-5'}>
            <h2 className={'font-extrabold text-center mb-3'}>Clock In / Out</h2>
            <div className={'w-full flex gap-1 h-48'}>
                <PunchButton title={'Clock In'} color={'bg-green-800'}/>
                <WorkClock/>
                <PunchButton title={'Clock Out'} color={'bg-blue-500'}/>
            </div>
        </section>
    )
}

function PunchButton({title, color}) {
    return (
        <div className={'w-1/4 h-full'}>
            <button className={`${color} w-full h-full rounded-lg`}>
                <FontAwesomeIcon icon={faBusinessTime} color={'red'} size={'4x'}/>
                <div className={'text-2xl text-white italic font-extrabold'}>{title}</div>
            </button>
        </div>
    )
}
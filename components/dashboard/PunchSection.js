

import WorkClock from "@/components/dashboard/WorkClock";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBusinessTime} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function PunchSection() {

    function getDate() {
        const date = new Date().toLocaleDateString();
        if (date.length === 9){
            return 0 + date.substring(0, 4);
        } else return date.substring(0,5);
    }
    function getTime() {
        const time = new Date().toLocaleTimeString();
        const amPM = time.substring(time.length -2)
        if (time.length === 10){
            return 0 + time.substring(0, 4) + ' ' + amPM;
        } else return time.substring(0, 5) + ' ' + amPM;
    }
    function startPunch() {
        const date = getDate();
        const time = getTime();
        console.log('clocked in at ' + date + ' ' + time);
    }

    function stopPunch() {
        const date = getDate();
        const time = getTime();
        console.log('clocked out at ' + date + ' ' + time);
    }

    return (
        <section className={'my-5 mx-2'}>
            <h2 className={'font-extrabold text-center mb-3'}>Clock In / Out</h2>
            <div className={'w-full flex gap-1'}>
                <PunchButton title={'Clock In'} buttonColor={'bg-green-700'} iconColor={'black'} onPunch={startPunch}/>
                <WorkClock/>
                <PunchButton title={'Clock Out'} buttonColor={'bg-red-700'} iconColor={'black'} onPunch={stopPunch}/>
            </div>
        </section>
    )
}

function PunchButton({title, buttonColor, iconColor, onPunch}) {
    return (
        <div className={'w-1/2 md:w-1/4 h-full'}>
            <button onClick={onPunch} className={`${buttonColor} w-full h-full rounded-lg py-2 hover:bg-gray-700 red`}>
                <FontAwesomeIcon icon={faBusinessTime} color={iconColor} size={'4x'}/>
                <div className={'text-2xl text-white italic font-bold'}>{title}</div>
            </button>
        </div>
    )
}
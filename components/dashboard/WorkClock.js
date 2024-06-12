'use client'
import React, {useEffect, useState} from "react";

export default function WorkClock() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const clock = currentTime.toLocaleTimeString();


    // update time per second
    useEffect(() => {
    const tick = ()=> {setCurrentTime(new Date());}
        const timeoutId = setTimeout(() => {
            tick();
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [currentTime]);


    return (
        <div className={'hidden md:inline-block md:w-1/2 md:text-6xl lg:text-7xl bg-gray-400  border-2 border-teal-800  text-center rounded-lg  place-content-center'}>
            <div className={'w-full'}>
                <span>{clock.length === 10 ? '0' + clock.substring(0, 7) : clock.substring(0, 8)}</span>
                <span className={'text-2xl'}>{clock.length === 10 ? ' (' + clock.substring(8, clock.length) + ')' : clock.substring(9, clock.length)}</span>
            </div>
        </div>
    )
}
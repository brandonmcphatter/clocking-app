import React, {useEffect, useState} from "react";

export default function WorkClock() {
    const [currentTime, setCurrentTime] = useState(new Date());
    const tick = ()=> {setCurrentTime(new Date());}
    const clock = currentTime.toLocaleTimeString();


    // update time per second
    useEffect(() => {
        tick();
    }, [currentTime]);


    return (
        <div className={'w-1/2 text-8xl h-48 bg-teal-300  border-2 border-teal-800 flex text-center rounded-lg'}>
            <div className={'w-full my-auto '}>
                <span>{clock.length === 10 ? '0' + clock.substring(0, 7) : clock.substring(0, 8)}</span>
                <span className={'text-2xl'}>{clock.length === 10 ? ' (' + clock.substring(8, clock.length) + ')' : clock.substring(9, clock.length)}</span>
            </div>
        </div>
    )
}
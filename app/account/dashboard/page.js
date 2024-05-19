import React from 'react';
import WorkSummarySection from "@/components/dashboard/WorkSummarySection";
import PunchSection from "@/components/dashboard/PunchSection";
import WorkHistoryTableSection from "@/components/dashboard/WorkHistoryTableSection";

export default function Dashboard() {
    return (
        <>
            <div className={'container mx-auto bg-transparent'}>
                {/*Display Pay Period - Hours Worked - Total Wages Earned*/}
                <WorkSummarySection/>

                {/*Punch In Punch Out*/}
                <PunchSection/>

                {/*Display Last 5 Days Worked*/}
                <WorkHistoryTableSection/>
            </div>
        </>
    );
}
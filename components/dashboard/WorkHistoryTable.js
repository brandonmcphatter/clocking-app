import WorkHistoryTableRow from "@/components/dashboard/WorkHistoryTableRow";
import React from "react";

export default function WorkHistoryTable() {
    return (
        <div className={'border-8 rounded-lg '} style={{backgroundColor: '#F4D06F' , borderColor: '#F4D06F'}}>
            <table className={'w-full table overflow-auto '}>
                <WorkHistoryTableHeader />
                <WorkHistoryTableBody />
            </table>
        </div>
    )
}

function WorkHistoryTableHeader() {
    return (
        <thead className={''}>
        <tr className={'underline'}>
            <th>Date</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Total Hrs</th>
        </tr>
        </thead>
    )
}

function WorkHistoryTableBody() {
    return (
        <tbody className={''}>
        <WorkHistoryTableRow bgColor={'bg-gray-400'}/>
        <WorkHistoryTableRow bgColor={'bg-gray-300'}/>
        <WorkHistoryTableRow bgColor={'bg-gray-400'}/>
        <WorkHistoryTableRow bgColor={'bg-gray-300'}/>
        <WorkHistoryTableRow bgColor={'bg-gray-400'}/>
        </tbody>
    )
}
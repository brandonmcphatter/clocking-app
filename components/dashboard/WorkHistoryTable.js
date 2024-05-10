import WorkHistoryTableRow from "@/components/dashboard/WorkHistoryTableRow";
import React from "react";

export default function WorkHistoryTable() {
    return (
        <table className={'w-full table overflow-auto'}>
            <WorkHistoryTableHeader />
            <WorkHistoryTableBody />
        </table>
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
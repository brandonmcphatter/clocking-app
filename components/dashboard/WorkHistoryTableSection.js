import React from "react";
import WorkHistoryTable from "@/components/dashboard/WorkHistoryTable";

export default function WorkHistoryTableSection() {
    return (

        <section className={'mx-2'}>
            <h2 className={'font-extrabold text-center mb-3'}>Work History</h2>
            <WorkHistoryTable />
        </section>

    )
}
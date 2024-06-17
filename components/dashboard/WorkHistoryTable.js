import WorkHistoryTableRow from "@/components/dashboard/WorkHistoryTableRow";
import {supabase} from "@/services/supabase";
import {useEffect, useState} from "react";
import {log} from "next/dist/server/typescript/utils";

export default function WorkHistoryTable() {
    return (
        <div className={'border-4 rounded-lg border-black'}>
            <table className={'w-full table overflow-auto '}>
                <WorkHistoryTableHeader/>
                <WorkHistoryTableBody/>
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
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData(){
            try {
                const {data: workHistory, error} = await supabase
                    .from('timesheet')
                    .select('*');
                setData(workHistory);
            } catch (error) {
            console.error('Error fetching data: ', error)
            } finally {
                setIsLoading(false);
            }
        }
        fetchData().then();
    }, []);

if (isLoading) return <p>Loading</p>;
    return (
        <tbody>
        {data.map((punch, index) => (
            <WorkHistoryTableRow key={index} bgColor={index%2 ? 'bg-gray-300' : 'bg-gray-300'} date={punch.date} timeIn={punch.timeIn} timeOut={punch.timeOut}/>
        ))}

        {data.length < 10 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 9 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 8 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 7 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 6 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 5 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 4 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 3 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 2 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}
        {data.length < 1 && <WorkHistoryTableRow bgColor={'bg-gray-300'}/>}


        {/*<WorkHistoryTableRow bgColor={'bg-gray-300'}/>*/}
        {/*<WorkHistoryTableRow bgColor={'bg-gray-400'}/>*/}
        {/*<WorkHistoryTableRow bgColor={'bg-gray-300'}/>*/}
        {/*<WorkHistoryTableRow bgColor={'bg-gray-400'}/>*/}
        </tbody>
    )
}
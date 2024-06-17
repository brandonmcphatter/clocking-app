import React from 'react';

function WorkHistoryTableRow({bgColor, date, timeIn, timeOut, totalHrs}) {
    return (
        <tr className={`${bgColor} h-12`}>
            <td className={'text-center'}>{ date ?  date : '-'}</td>
            <td className={'text-center'}>{ timeIn ?  timeIn : '-'}</td>
            <td className={'text-center'}>{ timeOut ?  timeOut : '-'}</td>
            <td className={'text-center'}>{ totalHrs ?  totalHrs : '-'}</td>
        </tr>
    );
}

export default WorkHistoryTableRow;
import React from 'react';

function WorkHistoryTableRow({bgColor}) {
    return (
        <tr className={`${bgColor} h-12`}>
            <td className={'text-center'}>01/08</td>
            <td className={'text-center'}>09:00</td>
            <td className={'text-center'}>17:00</td>
            <td className={'text-center'}>8.0</td>
        </tr>
    );
}

export default WorkHistoryTableRow;
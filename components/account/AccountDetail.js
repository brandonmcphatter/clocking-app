import React from "react";

export default function AccountDetail({name, label, value}) {
    return (
        <div className="mb-4 w-full md:w-1/2 md:pr-5">
            <label htmlFor={name} className="block text-gray-600">{label}</label>
            <div className=" w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 bg-transparent">
                {value}
            </div>
        </div>
    );
}
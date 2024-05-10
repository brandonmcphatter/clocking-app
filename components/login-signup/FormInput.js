import React from "react";

export default function FormInput({label, name, type}) {
    return (
        <div className="mb-4">
            <label htmlFor={name} className="block text-gray-600">{label}</label>
            <input type={type} id={name} name={name}
                   className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                   autoComplete="off"/>
        </div>
    )
}
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function SaveButton() {
    return (
        <button type={"submit"} className="bg-gray-500 hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 w-full mt-4 text-xl">
            <span className={'mr-3'}>Save </span>
            <span><FontAwesomeIcon icon={faCloud} /></span>
        </button>
    )
}
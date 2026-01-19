import React from "react";
import { ButtonProps } from "@/interfaces";


export default function Button({ label, onClick}: ButtonProps){
    return(
        <button onClick={onClick} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            {label}
        </button>
    )
}
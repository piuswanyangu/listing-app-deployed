import React from "react";
import { ButtonProps } from "@/interfaces";


export default function Button({ label, className = "", ...props}: ButtonProps){
    return(
        <button {...props} className={`primary-button ${className}`}>
            {label}
        </button>
    )
}

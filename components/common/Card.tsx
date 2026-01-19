import React from "react";
import Image from "next/image";
import { CardProps  } from "@/interfaces";


export default function Card({title, image, price}: CardProps){
    return (
        <div className="border rounded-xl p-4 shadow hover:shadow-lg transition">
            <Image src={image}
            alt={title}
            width={300}
            height={200}
            className="rounded-lg"
            />

            <h3 className="mt-2 font-semibold text-lg">{title}</h3>
            <p className="text-gray-600">ksh{price}/night</p>

            
        </div>
    )
}
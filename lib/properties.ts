import { PROPERTYLISTINGSAMPLE } from "@/constants";
export const getProperties=()=>PROPERTYLISTINGSAMPLE;
export const getPropertyById=(id:string)=>PROPERTYLISTINGSAMPLE.find(p=>p.id===id);

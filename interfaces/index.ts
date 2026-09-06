export type PropertyType = "Apartment" | "Cottage" | "Lodge" | "Villa";
export interface PropertyImage { src: string; alt: string }
export interface Address { destination: string; county: string; country: "Kenya" }
export interface PropertyProps { id:string; name:string; description:string; address:Address; propertyType:PropertyType; rating:number; price:number; bedrooms:number; bathrooms:number; maxGuests:number; amenities:string[]; images:PropertyImage[] }
export interface PropertyDetailProps { property: PropertyProps }
export interface CardProps { title:string; image:string; price:number }
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { label:string }

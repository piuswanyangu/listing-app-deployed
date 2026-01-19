// card props

import ReviewSection from "@/components/property/ReviewSection";
import { ReactNode } from "react";

export interface CardProps{
    title: string;
    image: string;
    price: number;
}

// button props
export interface ButtonProps {
    label: string;
    onClick: () => void
}
// address interface
export interface Address {
    state: string;
    city: string;
    country: string;
}
// offers interface
export interface Offers {
    bed: string;
    shower: string;
    occupants: string;
}
//  property props
export interface PropertyProps {
    description?: ReactNode;
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount?: string;
}

export interface PropertyDetailProps {
    property: PropertyProps;
}

// review interface
interface Review {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
}

export interface ReviewSectionProps {
    reviews: Review[];
}
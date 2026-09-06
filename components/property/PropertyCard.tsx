
import React from "react";
import Link from "next/link";
import type { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const { name, image, price, rating, address, discount } = property;

  return (
    <article className="h-full overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/property/${property.id}`} className="flex h-full flex-col focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300">
      <div className="relative">
        {/* External fixture images are not yet restricted to a production allowlist. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={`Demo accommodation: ${name}`} loading="lazy" className="h-48 w-full object-cover sm:h-52"/>
        {discount ? (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded">
            {discount}% OFF
          </div>
        ) : null}
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">{address.city}, {address.country}</p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-gray-100">
              ⭐ {rating.toFixed(2)}
            </span>
            <span className="text-sm text-gray-600">Per night</span>
          </div>

          <div className="text-right">
            <div className="text-lg font-bold">${price}</div>
            <div className="text-xs text-gray-500">avg. price</div>
          </div>
        </div>
      </div>
      </Link>
    </article>
  );
};

export default PropertyCard;

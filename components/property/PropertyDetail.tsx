import type { PropertyProps } from "@/interfaces";
import Link from "next/link";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <article className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Demo property</p>
      <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{property.name}</h1>
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="text-yellow-500">{property.rating} stars</span>
        <span>{property.address.city}, {property.address.country}</span>
      </div>

      {/* Image Grid */}
      <div className="mt-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={property.image} alt={`Demo accommodation: ${property.name}`} className="h-64 w-full rounded-lg object-cover sm:h-96" />
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p className="mt-2 text-gray-700">{property.description ?? "Additional property details will be added as the StayNia catalogue develops."}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {property.category.map((amenity) => (
            <li key={amenity} className="rounded-md bg-gray-200 p-2">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-950">This is fixture data for browsing demonstrations. Availability and booking are not yet enabled.</div>
      <Link href="/" className="mt-6 inline-block font-semibold text-indigo-700 hover:text-indigo-900">Back to all listings</Link>
    </article>
  );
};

export default PropertyDetail;

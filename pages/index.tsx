import Head from "next/head";
import { useEffect, useState } from "react";

import PropertyCard from "@/components/property/PropertyCard";
import type { PropertyProps } from "@/interfaces";

type LoadState = "loading" | "success" | "error";

export default function Home() {
  const [properties, setProperties] = useState<PropertyProps[]>([]);
  const [loadState, setLoadState] = useState<LoadState>("loading");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProperties() {
      try {
        const response = await fetch("/api/properties", { signal: controller.signal });
        if (!response.ok) throw new Error(`Property request failed with ${response.status}`);

        const data: PropertyProps[] = await response.json();
        setProperties(data);
        setLoadState("success");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.error("Unable to load demo properties", error);
        setLoadState("error");
      }
    }

    void fetchProperties();
    return () => controller.abort();
  }, []);

  return (
    <>
      <Head>
        <title>StayNia | Find trusted stays across Kenya</title>
        <meta name="description" content="Explore demo accommodation listings with StayNia, a property-browsing platform initially focused on Kenya." />
      </Head>
      <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Demo listings</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-950 sm:text-4xl">Find trusted stays across Kenya</h1>
          <p className="mt-3 text-gray-600">StayNia is progressing toward a modern accommodation marketplace for Kenya and, in the future, the wider African region.</p>
        </section>

        {loadState === "loading" && <p role="status" aria-live="polite" className="text-gray-600">Loading demo properties…</p>}
        {loadState === "error" && <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">We could not load the demo properties. Please refresh the page and try again.</div>}
        {loadState === "success" && properties.length === 0 && <p role="status" className="rounded-lg border border-gray-200 p-4 text-gray-600">No demo properties are available right now.</p>}
        {loadState === "success" && properties.length > 0 && (
          <section aria-label="Demo properties" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {properties.map((property) => <PropertyCard key={property.id} property={property} />)}
          </section>
        )}
      </main>
    </>
  );
}

import PropertyDetail from "@/components/property/PropertyDetail";
import type { PropertyProps } from "@/interfaces";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type LoadState = "idle" | "loading" | "success" | "not-found" | "error";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loadState, setLoadState] = useState<LoadState>("idle");

  useEffect(() => {
    if (typeof id !== "string") return;
    const controller = new AbortController();

    async function fetchProperty() {
      setLoadState("loading");
      try {
        const response = await fetch(`/api/properties/${encodeURIComponent(id as string)}`, { signal: controller.signal });
        if (response.status === 404) {
          setLoadState("not-found");
          return;
        }
        if (!response.ok) throw new Error(`Property request failed with ${response.status}`);

        const data: PropertyProps = await response.json();
        setProperty(data);
        setLoadState("success");
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.error("Unable to load demo property", error);
        setLoadState("error");
      }
    }

    void fetchProperty();
    return () => controller.abort();
  }, [id]);

  return (
    <>
      <Head>
        <title>{property ? `${property.name} | StayNia` : "Property | StayNia"}</title>
        <meta name="description" content={property?.description ?? "View a demo accommodation listing on StayNia."} />
      </Head>
      <main className="min-h-screen">
        {(loadState === "idle" || loadState === "loading") && <p role="status" aria-live="polite" className="mx-auto max-w-7xl px-4 py-10 text-gray-600">Loading demo property…</p>}
        {loadState === "not-found" && (
          <div className="mx-auto max-w-7xl px-4 py-10" role="status">
            <h1 className="text-2xl font-bold">Property not found</h1>
            <p className="mt-2 text-gray-600">That demo property does not exist.</p>
            <Link href="/" className="mt-4 inline-block font-semibold text-indigo-700 hover:text-indigo-900">Return to listings</Link>
          </div>
        )}
        {loadState === "error" && <div role="alert" className="mx-auto mt-10 max-w-7xl rounded-lg border border-red-200 bg-red-50 p-4 text-red-800">We could not load this demo property. Please try again.</div>}
        {loadState === "success" && property && <PropertyDetail property={property} />}
      </main>
    </>
  );
}

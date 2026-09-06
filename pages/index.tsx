import type { GetStaticProps } from "next";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Seo from "@/components/common/Seo";
import Notice from "@/components/common/Notice";
import DiscoveryControls from "@/components/discovery/DiscoveryControls";
import PropertyCard from "@/components/property/PropertyCard";
import type { PropertyProps } from "@/interfaces";
import { DEFAULT_FILTERS, filterProperties, filtersFromQuery, filtersToQuery, type Filters } from "@/lib/discovery";
import { getProperties } from "@/lib/properties";

export default function Home({ properties }: { properties: PropertyProps[] }) {
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>(() => filtersFromQuery(router.query));
  useEffect(() => {
    const sync = (url: string) => {
      const params = new URL(url, "http://staynia.local").searchParams;
      setFilters(filtersFromQuery(Object.fromEntries(params.entries())));
    };
    router.events.on("routeChangeComplete", sync);
    return () => router.events.off("routeChangeComplete", sync);
  }, [router.events]);
  const results = useMemo(() => filterProperties(properties, filters), [properties, filters]);
  function update(next: Filters) {
    setFilters(next);
    void router.push({ pathname: "/", query: filtersToQuery(next) }, undefined, { shallow: true });
  }
  return <><Seo title="StayNia | Find trusted stays across Kenya" description="Explore sample accommodation listings across Kenya on the StayNia demonstration platform."/><main><section className="hero"><div className="page-shell py-16 sm:py-24"><p className="eyebrow">Kenya-first accommodation discovery</p><h1>Find trusted stays across Kenya</h1><p>Explore how StayNia can make discovering accommodation clearer and simpler as the platform progresses toward a marketplace.</p></div></section><div className="page-shell py-8"><Notice/><div className="mt-8"><DiscoveryControls value={filters} onChange={update} onClear={() => update(DEFAULT_FILTERS)}/></div><p className="my-6 font-semibold" role="status" aria-live="polite">{results.length} demo {results.length === 1 ? "stay" : "stays"} found</p>{results.length ? <section aria-label="Demo stays" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{results.map(p => <PropertyCard key={p.id} property={p}/>)}</section> : <div className="empty-state"><h2>No demo stays match</h2><p>Adjust or clear your filters to see more sample properties.</p></div>}</div></main></>;
}
export const getStaticProps: GetStaticProps<{ properties: PropertyProps[] }> = async () => ({ props: { properties: getProperties() } });

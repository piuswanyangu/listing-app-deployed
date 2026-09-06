import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <Link href="/" className="flex items-center rounded-md focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300">
          <span className="mr-3 inline-block h-10 w-10 rounded-md bg-linear-to-br from-indigo-600 to-emerald-500" aria-hidden="true" />
          <span>
            <span className="block text-xl font-bold text-gray-950">StayNia</span>
            <span className="block text-xs text-gray-600">Find trusted stays across Kenya</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-4 text-sm font-medium">
          <Link className="text-gray-700 hover:text-indigo-700" href="/">Browse demo stays</Link>
          <Link className="text-gray-700 hover:text-indigo-700" href="/booking">Booking preview</Link>
        </nav>
      </div>
    </header>
  );
}

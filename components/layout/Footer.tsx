export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-gray-600 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-gray-950">StayNia</p>
          <p>Find trusted stays across Kenya</p>
          <p className="mt-1">An independent property-browsing application progressing toward a marketplace.</p>
        </div>
        <p>&copy; {new Date().getFullYear()} StayNia.</p>
      </div>
    </footer>
  );
}

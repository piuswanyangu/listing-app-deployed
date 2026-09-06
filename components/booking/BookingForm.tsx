import { FormEvent, useState } from "react";

export default function BookingForm() {
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Demo form validated. No booking was created and no information was sent.");
  }

  return (
    <div className="mt-6 rounded-lg bg-white p-4 shadow-md sm:p-6">
      <h2 className="text-xl font-semibold">Contact details demo</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block font-medium">First name</label>
            <input id="first-name" name="firstName" type="text" autoComplete="given-name" required className="mt-2 w-full rounded-md border p-2" />
          </div>
          <div>
            <label htmlFor="last-name" className="block font-medium">Last name</label>
            <input id="last-name" name="lastName" type="text" autoComplete="family-name" required className="mt-2 w-full rounded-md border p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-md border p-2" />
          </div>
          <div>
            <label htmlFor="phone-number" className="block font-medium">Phone number</label>
            <input id="phone-number" name="phoneNumber" type="tel" autoComplete="tel" className="mt-2 w-full rounded-md border p-2" />
          </div>
        </div>
        <button type="submit" className="mt-6 w-full rounded-md bg-indigo-700 px-4 py-2 font-semibold text-white hover:bg-indigo-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 sm:w-auto">Validate demo form</button>
      </form>
      {message && <p role="status" aria-live="polite" className="mt-4 rounded-md border border-emerald-200 bg-emerald-50 p-3 text-emerald-900">{message}</p>}
    </div>
  );
}

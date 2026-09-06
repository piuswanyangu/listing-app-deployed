import BookingForm from "@/components/booking/BookingForm";
import Head from "next/head";

export default function BookingPage() {
  return (
    <>
      <Head>
        <title>Booking preview | StayNia</title>
        <meta name="description" content="Preview StayNia's non-transactional booking enquiry form." />
      </Head>
      <main className="mx-auto min-h-screen max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Booking preview</h1>
        <p className="mt-3 text-gray-600">Bookings, availability checks, and payments are not enabled. This form validates locally and sends no information.</p>
        <BookingForm />
      </main>
    </>
  );
}

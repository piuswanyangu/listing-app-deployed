import axios from "axios";
import React, { useState } from "react"; // Added React to the import

export default function BookingForm(){
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  // 1. Type the error state so it accepts strings
  const [error, setError] = useState<string | null>(null);

  // 2. Change 'e.' to 'e:' (colon is for type assignment)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/bookings", formData);
      alert("Booking confirmed");
    } catch (err) {
      // 3. Set a string message here
      setError("Failed to submit booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields for booking details */}
      <button type="submit" disabled={loading} className="bg-blue-600 text-white p-2">
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </form>
  );
}
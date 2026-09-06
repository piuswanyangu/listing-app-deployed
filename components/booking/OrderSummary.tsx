interface BookingPreview {
  propertyName: string;
  startDate: string;
  totalNights: number;
  price: number;
  bookingFee: number;
}

const OrderSummary: React.FC<{ bookingDetails: BookingPreview }> = ({ bookingDetails }) => (
  <div className="rounded-lg bg-white p-4 shadow-md sm:p-6">
    <h2 className="text-xl font-semibold">Preview details</h2>
    <div className="mt-4">
      <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
      <p className="text-sm text-gray-500">{bookingDetails.startDate} · {bookingDetails.totalNights} nights</p>
    </div>
    <dl className="mt-6 space-y-2">
      <div className="flex justify-between"><dt>Booking fee</dt><dd>${bookingDetails.bookingFee}</dd></div>
      <div className="flex justify-between"><dt>Subtotal</dt><dd>${bookingDetails.price}</dd></div>
      <div className="flex justify-between font-semibold"><dt>Preview total</dt><dd>${bookingDetails.bookingFee + bookingDetails.price}</dd></div>
    </dl>
  </div>
);

export default OrderSummary;

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold">${price}/night</h3>
            <div className="mt-4">
                <label htmlFor="check-in">Check-in</label>
                <input id="check-in" name="checkIn" type="date" className="mt-2 w-full border p-2" />

            </div>
            <div className="mt-4">
                <label htmlFor="check-out">Check-out</label>
                <input id="check-out" name="checkOut" type="date" className="mt-2 w-full border p-2" />
            </div>
            {/* total payments */}
            <div className="mt-4">
                <p>Total Payment: <strong>${price * 7}</strong></p>
            </div>
            {/* Reserve Button */}
            <p className="mt-4 text-sm text-gray-600">Preview only. Availability and reservations are not enabled.</p>
        </div>
    )
}

export default BookingSection;

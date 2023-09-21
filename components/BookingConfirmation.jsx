const BookingConfirmation = ({ formData }) => {
	return (
		<div className="w-full max-w-xl px-4 py-10 min-h-[300px] text-center font-karla text-green flex flex-col justify-center">
			<h2 className="mb-8 text-3xl">Booking confirmed!</h2>
			<p className="text-xl">
				Table for {formData.guests} on {formData.date} at {formData.time} for your{' '}
				{formData.occasion}
			</p>
		</div>
	);
};

export default BookingConfirmation;

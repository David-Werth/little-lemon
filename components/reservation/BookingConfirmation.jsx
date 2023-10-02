const BookingConfirmation = ({ formData }) => {
	return (
		<div className="w-full max-w-xl px-4 py-10 min-h-[300px] text-center font-karla text-green flex flex-col justify-center">
			<h2 className="mb-8 text-3xl">Booking confirmed!</h2>
			<p className="text-xl">
				Thank you for booking a table for {formData.resGuests}! <br /> See you on{' '}
				{new Date(formData.resDate).toDateString()} at {formData.resTime} for your{' '}
				{formData.resOccasion}.
			</p>
		</div>
	);
};

export default BookingConfirmation;

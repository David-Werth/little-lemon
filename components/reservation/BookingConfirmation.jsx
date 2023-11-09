const BookingConfirmation = ({ formData }) => {
	return (
		<div className="flex flex-col items-center justify-center w-11/12 h-full max-w-5xl gap-10 py-10 text-center font-markazi text-green">
			<h2 className="mb-8 font-bold text-7xl font-markazi">
				Booking confirmed! 🎉
			</h2>
			<p className="text-xl font-karla">
				Thank you for booking a table for {formData.guests}! <br /> See you on{' '}
				{new Date(formData.date).toDateString()} at {formData.time}
				{formData.occasion != 'Other' ? ` for your ${formData.occasion}` : ''}.
			</p>
		</div>
	);
};

export default BookingConfirmation;

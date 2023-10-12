const BookingConfirmation = ({ formData }) => {
	return (
		<div className="w-11/12 h-full max-w-5xl px-4 py-10 min-h-[300px] text-center  text-green flex flex-col justify-center">
			<h2 className="mb-8 font-bold text-7xl font-markazi">
				Booking confirmed! 🎉
			</h2>
			<p className="text-xl font-karla">
				Thank you for booking a table for {formData.guests}! <br /> See you on{' '}
				{new Date(formData.date).toDateString()} at {formData.time} for your{' '}
				{formData.occasion}.
			</p>
		</div>
	);
};

export default BookingConfirmation;

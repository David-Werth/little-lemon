import mongoose from 'mongoose';

const ReservationSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	guests: {
		type: Number,
		required: true,
	},
	occasion: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

export const Reservation =
	mongoose.models.Reservation ||
	mongoose.model('Reservation', ReservationSchema);

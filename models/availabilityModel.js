import mongoose from 'mongoose';

const AvailabilitySchema = mongoose.Schema({
	date: {
		type: Date,
		required: true,
	},
	availableTimes: [String],
});

export const Availability =
	mongoose.models.Availability ||
	mongoose.model('Availability', AvailabilitySchema);

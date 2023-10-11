import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
	userDetails: {
		type: Object,
		required: true,
	},
	cart: {
		type: Object,
		required: true,
	},
	paymentMethod: {
		type: String,
		required: true,
	},
	total: {
		type: Number,
		required: true,
	},
	date: { type: Date, default: Date.now },
});

export const Order =
	mongoose.models.Order || mongoose.model('Order', OrderSchema);

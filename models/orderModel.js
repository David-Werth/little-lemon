import mongoose from 'mongoose';

const OrderSchema = mongoose.Schema({
	userDetails: {
		type: Object,
		required: true,
	},
	items: [{ itemId: String, itemCount: Number }],
	date: new Date(),
});

export const Order =
	mongoose.models.Order || mongoose.model('Order', OrderSchema);

import mongoose from 'mongoose';

const menuItemSchema = mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
});

export const MenuItem =
	mongoose.models.Item || mongoose.model('Item', menuItemSchema);

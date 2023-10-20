import mongoose from 'mongoose';

const CouponSchema = mongoose.Schema({
	code: {
		type: String,
		required: true,
	},
	value: {
		type: Number,
		required: true,
	},
});

export const Coupon =
	mongoose.models.Coupon || mongoose.model('Coupon', CouponSchema);

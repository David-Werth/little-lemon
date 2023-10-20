'use server';

import { Coupon } from '../models/couponModel';
import connectMongoDB from '../mongodb';

export async function getCoupon(code) {
	try {
		await connectMongoDB();

		const coupon = await JSON.parse(
			JSON.stringify(await Coupon.findOne({ code: code }))
		);
		return coupon.value;
	} catch (error) {
		console.log(error);
	}
}

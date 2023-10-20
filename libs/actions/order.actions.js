'use server';

import { Order } from '../models/orderModel';
import connectMongoDB from '../mongodb';

export async function submitOrder({ userDetails, cart, paymentMethod, total }) {
	try {
		await connectMongoDB();

		await Order.create({ userDetails, cart, paymentMethod, total });
	} catch (error) {
		console.log(error);
	}
}

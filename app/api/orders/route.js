import connectMongoDB from '@/libs/mongodb';
import { Order } from '@/models/orderModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { userDetails, cart, paymentMethod, total } = await req.json();
	await connectMongoDB();
	await Order.create({ userDetails, cart, paymentMethod, total });
	return NextResponse.json({ message: 'Order created' }, { status: 201 });
}

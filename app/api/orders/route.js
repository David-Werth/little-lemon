import connectMongoDB from '@/libs/mongodb';
import { Order } from '@/models/orderModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { userDetails, items, paymentMethod, total } = await req.json();
	await connectMongoDB();
	await Order.create({ userDetails, items, paymentMethod, total });
	return NextResponse.json({ message: 'Order created' }, { status: 201 });
}

// export async function GET() {
// 	await connectMongoDB();
// 	const menuItems = await MenuItem.find();
// 	return NextResponse.json({ menuItems });
// }

// export async function DELETE(req) {
// 	const id = req.nextUrl.searchParams.get('id');
// 	await connectMongoDB();
// 	await MenuItem.findByIdAndDelete(id);
// 	return NextResponse.json({ message: 'Menu item deleted' }, { status: 200 });
// }

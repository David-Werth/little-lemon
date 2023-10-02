import connectMongoDB from '@/libs/mongodb';
import { MenuItem } from '@/models/menuItemModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { category, title, description, price, img } = await req.json();
	await connectMongoDB();
	await MenuItem.create({ category, title, description, price, img });
	return NextResponse.json({ message: 'Menu item created' }, { status: 201 });
}

export async function GET() {
	await connectMongoDB();
	const menuItems = await MenuItem.find();
	return NextResponse.json({ menuItems });
}

export async function DELETE(req) {
	const id = req.nextUrl.searchParams.get('id');
	await connectMongoDB();
	await MenuItem.findByIdAndDelete(id);
	return NextResponse.json({ message: 'Menu item deleted' }, { status: 200 });
}

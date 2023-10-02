import connectMongoDB from '@/libs/mongodb';
import { MenuItem } from '@/models/menuItemModel';
import { NextResponse } from 'next/server';

export async function PUT(req, { params }) {
	const { id } = params;
	const {
		newCategory: category,
		newTitle: title,
		newDescription: description,
		newPrice: price,
		newImg: img,
	} = await req.json();
	await connectMongoDB();
	await MenuItem.findByIdAndUpdate(id, {
		category,
		title,
		description,
		price,
		img,
	});
	return NextResponse.json({ message: 'Menu item updated' }, { status: 200 });
}

export async function GET(req, { params }) {
	const { id } = params;
	await connectMongoDB();
	const menuItem = await MenuItem.findOne({ _id: id });
	return NextResponse.json({ menuItem }, { status: 200 });
}

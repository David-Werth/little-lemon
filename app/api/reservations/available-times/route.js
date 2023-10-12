import connectMongoDB from '@/libs/mongodb';
import { Availability } from '@/models/availabilityModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { date, availableTimes } = await req.json();
	await connectMongoDB();
	await Availability.create({ date, availableTimes });
	return NextResponse.json({ message: 'Availability created' }, { status: 201 });
}

export async function GET(req) {
	const date = req.nextUrl.searchParams.get('date');
	await connectMongoDB();
	const availability = await Availability.findOne({ date: date });
	return NextResponse.json({ availability });
}

export async function PUT(req) {
	const { date, availableTimes } = await req.json();
	await connectMongoDB();
	await Availability.findOneAndUpdate(
		{ date: date },
		{ availableTimes: availableTimes }
	);

	return NextResponse.json({ message: 'Times updated' }, { status: 200 });
}

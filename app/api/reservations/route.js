import connectMongoDB from '@/libs/mongodb';
import { Reservation } from '@/models/reservationModel';
import { NextResponse } from 'next/server';

export async function POST(req) {
	const { name, date, time, guests, occasion, email } = await req.json();
	await connectMongoDB();
	await Reservation.create({ name, date, time, guests, occasion, email });
	return NextResponse.json({ message: 'Reservation created' }, { status: 201 });
}

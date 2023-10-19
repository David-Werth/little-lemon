'use server';

import { Availability } from '../models/availabilityModel';
import { Reservation } from '../models/reservationModel';
import connectMongoDB from '../mongodb';

export async function submitReservation({
	name,
	date,
	time,
	guests,
	occasion,
	email,
}) {
	try {
		await connectMongoDB();
		await Reservation.create({ name, date, time, guests, occasion, email });
	} catch (error) {
		console.log(error);
	}
}

export async function getAvailableTimes(selectedDate) {
	try {
		await connectMongoDB();
		const date = await JSON.parse(
			JSON.stringify(await Availability.findOne({ date: selectedDate }))
		);
		console.log(date);
		return date.availableTimes;
	} catch (error) {
		console.log(error);
	}
}

export async function createAvailableTimes({ date, availableTimes }) {
	try {
		await connectMongoDB();
		await Availability.create({ date: date, availableTimes: availableTimes });
	} catch (error) {
		console.log(error);
	}
}

export async function updateAvailableTimes({ date, availableTimes }) {
	try {
		await connectMongoDB();
		await Availability.findOneAndUpdate(
			{ date: date },
			{ availableTimes: availableTimes }
		);
	} catch (error) {
		console.log(error);
	}
}

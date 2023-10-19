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

export async function getAvailableTimes({ selectedDate }) {
	try {
		await connectMongoDB();

		const result = await Availability.findOne({
			date: selectedDate.toISOString(),
		});

		console.log(selectedDate, 'got');
		console.log(result);
		return result;
	} catch (error) {
		console.log(error);
	}
}

export async function createAvailableTimes({ date, availableTimes }) {
	try {
		await connectMongoDB();
		await Availability.create({ date: date, availableTimes: availableTimes });
		console.log({ date, availableTimes }, 'created');
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
		console.log({ date, availableTimes }, 'updated');
	} catch (error) {
		console.log(error);
	}
}

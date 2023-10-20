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
	console.log('server date unformatted: ', selectedDate);
	console.log(
		'server date formatted: ',
		selectedDate.toString().replace('+', ' ')
	);
	try {
		await connectMongoDB();
		const result = await JSON.parse(
			JSON.stringify(
				await Availability.findOne({
					date: selectedDate.toString().replace('+', ' '),
				})
			)
		);

		return result;
	} catch (error) {
		console.log(error);
	}
}

export async function createAvailableTimes({ date, availableTimes }) {
	try {
		await connectMongoDB();
		await Availability.create({
			date: date.toString().replace('+', ' '),
			availableTimes: availableTimes,
		});
	} catch (error) {
		console.log(error);
	}
}

export async function updateAvailableTimes({ date, availableTimes }) {
	try {
		await connectMongoDB();
		await Availability.findOneAndUpdate(
			{ date: date.toString().replace('+', ' ') },
			{ availableTimes: availableTimes }
		);
	} catch (error) {
		console.log(error);
	}
}

'use client';

import BookingForm from '@/components/BookingForm';
import { useReducer } from 'react';

const Page = () => {
	const updateTimes = (availableTimes, action) => {
		switch (action.type) {
			case 'selected_date':
				return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

			default:
				return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
		}
	};

	const initializeTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

	return (
		<section className="flex justify-center">
			<div className="flex flex-col items-center w-full ">
				<h1 className="w-full py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
					Table reservation
				</h1>
				<BookingForm availableTimes={availableTimes} dispatch={dispatch} />
			</div>
		</section>
	);
};

export default Page;

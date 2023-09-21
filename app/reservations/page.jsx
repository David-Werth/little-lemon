'use client';

import { fetchAPI, submitAPI } from '@/api/api';
import BookingConfirmation from '@/components/BookingConfirmation';
import BookingForm from '@/components/BookingForm';
import { useEffect, useReducer, useState } from 'react';

const Page = () => {
	const [formData, setFormData] = useState(undefined);
	const [isConfirmed, setIsConfirmed] = useState(false);

	const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

	const updateTimes = (availableTimes, action) => {
		switch (action.type) {
			case 'selected_date':
				return fetchAPI(action.date);
			default:
				return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
		}
	};

	console.log(submitAPI(formData));

	const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

	useEffect(() => {
		const submitForm = () => {
			console.log(formData);
			submitAPI(formData) ? setIsConfirmed(true) : null;
		};

		return () => {
			submitForm();
		};
	}, [formData]);

	return (
		<section className="flex justify-center">
			<div className="flex flex-col items-center w-full ">
				<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
					Table reservation
				</h1>
				{!isConfirmed ? (
					<BookingForm
						availableTimes={availableTimes}
						dispatch={dispatch}
						setFormData={setFormData}
					/>
				) : (
					<BookingConfirmation formData={formData} />
				)}
			</div>
		</section>
	);
};

export default Page;

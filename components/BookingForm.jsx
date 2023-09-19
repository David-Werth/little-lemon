'use client';

import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch }) => {
	const [resDate, setResDate] = useState('');
	const [resTime, setResTime] = useState('');
	const [resGuests, setResGuests] = useState('');
	const [resOccasion, setResOccasion] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({
			type: 'selected_date',
			time: resTime,
			date: resDate,
		});
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="grid justify-center w-full max-w-sm grid-cols-1 gap-8 py-10"
		>
			<div className="flex flex-col">
				<label htmlFor="res-date">Choose date</label>
				<input
					type="date"
					id="res-date"
					value={resDate}
					onChange={(e) => {
						setResDate(e.target.value);
					}}
				/>
			</div>

			<div className="flex flex-col">
				<label htmlFor="res-time">Choose time</label>
				<select
					id="res-time"
					value={resTime}
					onChange={(e) => setResTime(e.target.value)}
				>
					{availableTimes.map((time) => (
						<option key={time}>{time}</option>
					))}
				</select>
			</div>
			<div className="flex flex-col">
				<label htmlFor="guests">Number of guests</label>
				<input
					type="number"
					placeholder="1"
					min="1"
					max="10"
					id="guests"
					value={resGuests}
					onChange={(e) => setResGuests(e.target.value)}
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					value={resOccasion}
					onChange={(e) => setResOccasion(e.target.value)}
				>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
			</div>
			<input type="submit" value="Make Your reservation" />
		</form>
	);
};

export default BookingForm;

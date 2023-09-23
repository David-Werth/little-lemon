'use client';

import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, setFormData, submitForm }) => {
	const [resDate, setResDate] = useState('');
	const [resTime, setResTime] = useState(availableTimes[0]);
	const [resGuests, setResGuests] = useState(1);
	const [resOccasion, setResOccasion] = useState('Birthday');
	const [formError, setFormError] = useState(false);

	const handleDateChange = (e) => {
		setResDate(e.target.value);
		dispatch({
			type: 'selected_date',
			date: new Date(e.target.value),
		});
		setFormError(false);
	};

	const formReset = () => {
		setResDate('');
		setResTime(availableTimes[0]);
		setResGuests(1);
		setResOccasion('Birthday');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (resDate) {
			setFormError(false);
			setFormData({
				resDate,
				resTime,
				resGuests,
				resOccasion,
			});
			submitForm();
			formReset();
		} else {
			setFormError(true);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="grid justify-center w-full max-w-lg grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 text-green font-karla"
		>
			<div className="flex flex-col gap-1">
				<label htmlFor="res-date">Choose date</label>
				<input
					type="date"
					placeholder="mm/dd/yyyy"
					id="res-date"
					value={resDate}
					onChange={handleDateChange}
					className={`p-4 font-bold border rounded-md shadow-md border-green ${
						formError && 'border-red-700 text-red-700 border-2'
					}`}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="res-time">Choose time</label>
				<select
					id="res-time"
					value={resTime}
					onChange={(e) => setResTime(e.target.value)}
					className="p-4 font-bold border rounded-md shadow-md border-green"
				>
					{availableTimes.map((time) => (
						<option key={time}>{time}</option>
					))}
				</select>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="guests">Number of guests</label>
				<select
					id="guests"
					value={resGuests}
					onChange={(e) => setResGuests(e.target.value)}
					className="p-4 font-bold border rounded-md shadow-md border-green"
				>
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
					<option>6</option>
					<option>7</option>
					<option>8</option>
					<option>9</option>
					<option>10</option>
				</select>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="occasion">Occasion</label>
				<select
					id="occasion"
					value={resOccasion}
					onChange={(e) => setResOccasion(e.target.value)}
					className="p-4 font-bold border rounded-md shadow-md border-green"
				>
					<option>Birthday</option>
					<option>Anniversary</option>
				</select>
			</div>
			<div className="text-center md:col-span-2">
				{formError && <p className="text-red-700">Please choose a date!</p>}
				<input
					type="submit"
					value="Make Your reservation"
					className="px-4 py-3 font-bold transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow"
				/>
			</div>
		</form>
	);
};

export default BookingForm;

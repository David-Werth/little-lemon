'use client';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

const dateObj = new Date();
const month = dateObj.getUTCMonth() + 1;
const day = dateObj.getUTCDate();
const year = dateObj.getUTCFullYear();
const minDate = year + '-' + month + '-' + day;

const initTimes = [
	'18:00',
	'18:30',
	'19:00',
	'19:30',
	'20:00',
	'20:30',
	'21:00',
	'21:30',
	'22:00',
	'22:30',
];

const BookingForm = ({ setFormData, setHasBeenSubmitted }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoadingTimes, setIsLoadingTimes] = useState(false);
	const [availableTimes, setAvailableTimes] = useState(initTimes);
	const [dateExists, setDateExists] = useState(false);

	const handleDateChange = async (date) => {
		try {
			setIsLoadingTimes(true);
			const res = await fetch(`/api/reservations/available-times?date=${date}`);
			const { availability } = await res.json();
			if (availability) {
				setAvailableTimes(availability.availableTimes);
				setDateExists(true);
				setIsLoadingTimes(false);
			} else {
				setAvailableTimes(initTimes);
				setDateExists(false);
				setIsLoadingTimes(false);
			}
		} catch (error) {
			setIsLoadingTimes(false);
		}
	};

	const reservationDetailSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		date: Yup.date()
			.required('Required')
			.test('', '', (value) => {
				handleDateChange(value);
				return true;
			}),
		time: Yup.string().required('Required'),
		guests: Yup.number().required('Required'),
		occasion: Yup.string().required('Required'),
		email: Yup.string().email('Please enter valid email').required('Required'),
	});

	return (
		<Formik
			initialValues={{
				name: '',
				date: '',
				time: availableTimes[0],
				guests: '1',
				occasion: 'Birthday',
				email: '',
			}}
			validationSchema={reservationDetailSchema}
			onSubmit={async (values) => {
				try {
					setIsLoading(true);
					await fetch('/api/reservations', {
						method: 'POST',
						body: JSON.stringify({
							name: values.name,
							date: values.date,
							time: values.time,
							guests: values.guests,
							occasion: values.occasion,
							email: values.email,
						}),
					});
				} catch (error) {
					console.log(error);
				}
				if (!dateExists) {
					try {
						await fetch('/api/reservations/available-times', {
							method: 'POST',
							body: JSON.stringify({
								date: values.date,
								availableTimes: availableTimes.filter((t) => t != values.time),
							}),
						});
					} catch (error) {
						console.log(error);
					}
				} else {
					try {
						await fetch(`/api/reservations/available-times`, {
							method: 'PUT',
							body: JSON.stringify({
								date: values.date,
								availableTimes: availableTimes.filter((t) => t != values.time),
							}),
						});
					} catch (error) {
						console.log(error);
					}
				}

				setFormData(values);
				setHasBeenSubmitted(true);
				setIsLoading(false);
			}}
		>
			<Form className="grid justify-center w-11/12 h-full max-w-3xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 text-green font-karla">
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Your name</label>
					<Field
						type="text"
						name="name"
						placeholder="John Doe"
						autoComplete="off"
						className="p-4 font-bold border rounded-md border-green"
					/>
					<ErrorMessage name="name" />
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="date">Choose date</label>
					<Field
						type="date"
						placeholder="mm/dd/yyyy"
						name="date"
						className="p-4 font-bold border rounded-md border-green"
						min={minDate}
					/>
					<ErrorMessage name="date" />
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="time">
						Choose time{' '}
						<span>
							{isLoadingTimes ? (
								<FontAwesomeIcon className="animate-spin" icon={faSpinner} />
							) : null}
						</span>
					</label>
					<Field
						as="select"
						name="time"
						className="p-4 font-bold border rounded-md border-green"
					>
						{availableTimes.map((t) => {
							return <option key={t}>{t}</option>;
						})}
					</Field>
					<ErrorMessage name="time" />
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="guests">Number of guests</label>
					<Field
						as="select"
						name="guests"
						className="p-4 font-bold border rounded-md border-green"
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
					</Field>
					<ErrorMessage name="guests" />
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="occasion">Occasion</label>
					<Field
						as="select"
						name="occasion"
						className="p-4 font-bold border rounded-md border-green"
					>
						<option>Birthday</option>
						<option>Anniversary</option>
						<option>Other</option>
					</Field>
					<ErrorMessage name="occasion" />
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Email address</label>
					<Field
						type="text"
						name="email"
						placeholder="You may enter a fake email"
						autoComplete="off"
						className="p-4 font-bold border rounded-md border-green"
					/>
					<ErrorMessage name="email" />
				</div>
				<div className="text-center md:col-span-2">
					<button
						type="submit"
						className="px-4 py-3 min-w-[198px] font-bold text-center transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
					>
						{isLoading ? (
							<FontAwesomeIcon className="animate-spin" icon={faSpinner} />
						) : (
							'Make your reservation'
						)}
					</button>
				</div>
			</Form>
		</Formik>
	);
};

export default BookingForm;

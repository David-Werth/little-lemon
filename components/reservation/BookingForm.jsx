'use client';

import {
	createAvailableTimes,
	getAvailableTimes,
	submitReservation,
	updateAvailableTimes,
} from '@/libs/actions/reservation.actions';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ErrorMessage, Field, Formik, Form, useFormik } from 'formik';
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

	const [prevDate, setPrevDate] = useState('');

	const handleDateChange = async (selectedDate) => {
		try {
			setIsLoadingTimes(true);
			const date = await getAvailableTimes(selectedDate);
			if (date) {
				setAvailableTimes(date.availableTimes);
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
				if (prevDate.toString() != value.toString()) {
					handleDateChange(value);
					setPrevDate(value);
					return true;
				} else {
					setPrevDate(value);
					return true;
				}
			}),
		time: Yup.string().required('Required'),
		guests: Yup.number().required('Required'),
		occasion: Yup.string().required('Required'),
		email: Yup.string().email('Please enter valid email').required('Required'),
	});

	const formik = useFormik({
		initialValues: {
			name: '',
			date: '',
			time: '',
			guests: '',
			occasion: '',
			email: '',
		},
		validationSchema: reservationDetailSchema,
		onSubmit: async (values) => {
			setIsLoading(true);
			await submitReservation({
				name: values.name,
				date: values.date,
				time: values.time,
				guests: values.guests,
				occasion: values.occasion,
				email: values.email,
			});

			if (!dateExists) {
				await createAvailableTimes({
					date: values.date,
					availableTimes: availableTimes.filter((t) => t != values.time),
				});
			} else {
				await updateAvailableTimes({
					date: values.date,
					availableTimes: availableTimes.filter((t) => t != values.time),
				});
			}
			console.log(values, 'values');

			setFormData(values);
			setHasBeenSubmitted(true);
			setIsLoading(false);
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className="grid justify-center w-11/12 h-full max-w-3xl grid-cols-1 gap-10 px-4 py-10 md:grid-cols-2 text-green font-karla"
		>
			<div className="flex flex-col gap-1">
				<label htmlFor="name">
					Your name{' '}
					{formik.errors.name && formik.touched.name && (
						<span className="text-red-600 ">{formik.errors.name}</span>
					)}
				</label>

				<input
					type="text"
					name="name"
					placeholder="John Doe"
					autoComplete="off"
					className="p-4 font-bold border rounded-md border-green"
					value={formik.values.name}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="date">
					Choose date{' '}
					{formik.errors.date && formik.touched.date && (
						<span className="text-red-600 ">{formik.errors.date}</span>
					)}
				</label>
				<input
					type="date"
					placeholder="mm/dd/yyyy"
					name="date"
					className={`p-4 font-bold  border rounded-md border-green focus:text-green ${
						formik.values.date == '' ? 'text-gray-400' : 'text-green'
					}`}
					min={minDate}
					value={formik.values.date}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="time">
					Choose time{' '}
					{formik.errors.time && formik.touched.time && (
						<span className="text-red-600 ">{formik.errors.time}</span>
					)}
					<span>
						{isLoadingTimes ? (
							<FontAwesomeIcon className="animate-spin" icon={faSpinner} />
						) : null}
					</span>
				</label>
				<select
					name="time"
					className={`p-4 font-bold  border rounded-md border-green focus:text-green ${
						formik.values.time == '' ? 'text-gray-400' : 'text-green'
					}`}
					value={formik.values.time}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				>
					<option hidden>Choose a time</option>
					{availableTimes.map((t) => {
						return <option key={t}>{t}</option>;
					})}
				</select>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="guests">
					Number of guests{' '}
					{formik.errors.guests && formik.touched.guests && (
						<span className="text-red-600 ">{formik.errors.guests}</span>
					)}
				</label>
				<select
					name="guests"
					className={`p-4 font-bold  border rounded-md border-green focus:text-green ${
						formik.values.guests == '' ? 'text-gray-400' : 'text-green'
					}`}
					value={formik.values.guests}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				>
					<option hidden>Choose number of guests</option>
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
				<label htmlFor="occasion">
					Occasion{' '}
					{formik.errors.occasion && formik.touched.occasion && (
						<span className="text-red-600 ">{formik.errors.occasion}</span>
					)}
				</label>
				<select
					name="occasion"
					className={`p-4 font-bold  border rounded-md border-green focus:text-green ${
						formik.values.occasion == '' ? 'text-gray-400' : 'text-green'
					}`}
					value={formik.values.occasion}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				>
					<option hidden>Choose an occasion</option>
					<option>Birthday</option>
					<option>Anniversary</option>
					<option>Other</option>
				</select>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="name">
					Email address{' '}
					{formik.errors.email && formik.touched.email && (
						<span className="text-red-600 ">{formik.errors.email}</span>
					)}
				</label>
				<input
					type="text"
					name="email"
					placeholder="You may enter a fake email"
					autoComplete="off"
					className="p-4 font-bold border rounded-md border-green"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
			</div>
			<div className="text-center md:col-span-2">
				<button
					type="submit"
					className="px-4 py-3 min-w-[198px] font-bold text-center transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
				>
					{isLoading ? (
						<FontAwesomeIcon className="animate-spin" icon={faSpinner} />
					) : (
						'Confirm'
					)}
				</button>
			</div>
		</form>
	);
};

export default BookingForm;

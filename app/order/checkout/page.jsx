'use client';

import Link from 'next/link';
import { useContext, useState } from 'react';

import { TotalCartValueContext } from '@/context/TotalCartValueContext';

import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import {
	faCreditCard,
	faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocalStorageContext } from '@/context/LocalStorageContext';
import { Field, useFormik } from 'formik';

const validate = (values) => {
	const errors = {};
	if (!values.name) {
		errors.name = 'Required';
	}
	if (!values.street) {
		errors.street = 'Required';
	}
	if (!values.additional) {
		errors.additional = 'Required';
	}
	if (!values.city) {
		errors.city = 'Required';
	}
	if (!values.phone) {
		errors.phone = 'Required';
	}
	if (!values.paymentMethod) {
		errors.paymentMethod = 'Required';
	}

	return errors;
};

const page = () => {
	const { total } = useContext(TotalCartValueContext);
	const { setCartState, updateLocalStorage } = useContext(LocalStorageContext);

	const [coupon, setCoupon] = useState('');
	const [isCouponValid, setIsCouponValid] = useState(false);
	const couponValue = 5;

	const formik = useFormik({
		initialValues: {
			name: '',
			street: '',
			additional: '',
			city: '',
			phone: '',
			paymentMethod: '',
			total: total
				? isCouponValid
					? (total + 2.99 - couponValue).toFixed(2)
					: (total + 2.99).toFixed(2)
				: 0,
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const handleCouponApply = () => {
		if (coupon.toUpperCase() === '5LESS') {
			setIsCouponValid(true);
		} else {
			setIsCouponValid(false);
		}
	};

	return (
		<section className="flex flex-col items-center w-full">
			<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
				Checkout
			</h1>
			<form
				onSubmit={formik.handleSubmit}
				className="flex flex-col w-11/12 max-w-5xl gap-10 py-10 lg:flex-row font-karla text-green"
			>
				<div className="flex flex-col w-full gap-4 lg:w-2/3 ">
					<h3 className="text-xl">Delivery Address</h3>
					<div className="flex flex-col gap-1">
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="John Doe"
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="p-4 font-bold border rounded-md border-green"
						/>
						{formik.touched.name && formik.errors.name ? (
							<div className="font-bold text-red-600">{formik.errors.name}</div>
						) : null}
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="street">Street & Number</label>
						<input
							type="text"
							name="street"
							id="street"
							placeholder="Main Street 10"
							value={formik.values.street}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="p-4 font-bold border rounded-md border-green"
						/>
						{formik.touched.street && formik.errors.street ? (
							<div className="font-bold text-red-600">{formik.errors.street}</div>
						) : null}
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="additional">Floor / Door</label>
						<input
							type="text"
							name="additional"
							id="additional"
							placeholder="Floor 1, Door 11"
							value={formik.values.additional}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="p-4 font-bold border rounded-md border-green"
						/>
						{formik.touched.additional && formik.errors.additional ? (
							<div className="font-bold text-red-600">{formik.errors.additional}</div>
						) : null}
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="city">City</label>
						<input
							type="text"
							name="city"
							id="city"
							placeholder="Anytown"
							value={formik.values.city}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="p-4 font-bold border rounded-md border-green"
						/>
						{formik.touched.city && formik.errors.city ? (
							<div className="font-bold text-red-600">{formik.errors.city}</div>
						) : null}
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="phone">Number</label>
						<input
							type="number"
							name="phone"
							id="phone"
							placeholder="Your phone number"
							value={formik.values.phone}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className="p-4 font-bold border rounded-md border-green"
						/>
						{formik.touched.phone && formik.errors.phone ? (
							<div className="font-bold text-red-600">{formik.errors.phone}</div>
						) : null}
					</div>
					<div>
						<h3>Payment Method:</h3>
						<div className="flex gap-4 mt-2">
							<label
								className={`flex flex-col items-center justify-center px-5 py-2 transition-colors border rounded-md cursor-pointer w-28 hover:bg-green hover:text-white  ${
									formik.values.paymentMethod === 'cash'
										? 'bg-green text-white'
										: 'border-green text-green'
								}`}
							>
								<FontAwesomeIcon icon={faMoneyBillWave} className="h-12" />
								<p>Cash</p>
								<input
									type="radio"
									name="paymentMethod"
									id="paymentMethod"
									value="cash"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</label>

							<label className="flex flex-col items-center justify-center px-5 py-2 text-gray-500 bg-gray-300 border border-gray-400 rounded-md cursor-not-allowed w-28">
								<FontAwesomeIcon icon={faCreditCard} className="h-12" />
								<p>Card</p>
							</label>
							<label className="flex flex-col items-center justify-center px-5 py-2 text-gray-500 bg-gray-300 border border-gray-400 rounded-md cursor-not-allowed w-28">
								<FontAwesomeIcon icon={faPaypal} className="h-12" />
								<p>PayPal</p>
							</label>
						</div>
						{formik.touched.paymentMethod && formik.errors.paymentMethod ? (
							<div className="font-bold text-red-600">{formik.errors.name}</div>
						) : null}
						<span className="text-red-600">
							*Sorry, at the moment we only offer cash on delivery!
						</span>
					</div>
				</div>
				<div className="flex flex-col w-full gap-4 lg:w-1/3">
					<h3 className="text-xl">Order Summary</h3>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<div className="flex justify-between w-full text-lg">
								<h4>Cart:</h4>
								<Link href="/order/cart" className="font-bold underline">
									Edit
								</Link>
							</div>
							<p>Subtotal: ${total}</p>
							<p>+ Delivery fees: $2.99</p>
							{isCouponValid && <p>- COUPON: ${couponValue}</p>}
							<div className="w-full h-[1px] bg-green mb-1"></div>
							<p className="font-bold">
								= Total: $
								{total
									? isCouponValid
										? (total + 2.99 - couponValue).toFixed(2)
										: (total + 2.99).toFixed(2)
									: 0}
							</p>
							<div className="flex flex-col gap-1">
								<label htmlFor="coupon">Got a coupon?</label>
								<div className="flex gap-1">
									<input
										type="text"
										name="coupon"
										id="coupon"
										placeholder="TRY: 5LESS"
										className="p-4 font-bold border rounded-md border-green"
										value={coupon.toUpperCase()}
										onChange={(e) => setCoupon(e.target.value)}
										spellCheck={false}
									/>
									<input
										type="button"
										value="Apply"
										className="flex-1 p-4 font-bold border rounded-md cursor-pointer border-green hover:bg-green hover:text-white"
										onClick={handleCouponApply}
									/>
								</div>
							</div>
						</div>
						<input
							type="submit"
							value="Order now!"
							className="px-4 py-3 font-bold text-center transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
						/>
					</div>
				</div>
			</form>
		</section>
	);
};

export default page;

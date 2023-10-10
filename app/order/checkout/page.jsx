'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';

import { TotalCartValueContext } from '@/context/TotalCartValueContext';

import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import {
	faCreditCard,
	faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LocalStorageContext } from '@/context/LocalStorageContext';
import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import * as Yup from 'yup';

const page = () => {
	const router = useRouter();

	const { total } = useContext(TotalCartValueContext);
	const { setCartState, updateLocalStorage } = useContext(LocalStorageContext);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

	const [coupon, setCoupon] = useState('');
	const [isCouponValid, setIsCouponValid] = useState(false);
	const couponValue = 5;

	const handleCouponApply = () => {
		if (coupon.toUpperCase() === '5LESS') {
			setIsCouponValid(true);
		} else {
			setIsCouponValid(false);
		}
	};

	const deliveryDetailsSchema = Yup.object().shape({
		name: Yup.string().required('Required'),
		street: Yup.string().required('Required'),
		additional: Yup.string().required('Required'),
		city: Yup.string().required('Required'),
		phone: Yup.number('not number').required('Required'),
		paymentMethod: Yup.string()
			.required('Required')
			.test('test', 'test', (value) => {
				setSelectedPaymentMethod(value);
				return true;
			}),
		total: Yup.number(),
	});

	return (
		<section className="flex flex-col items-center w-full">
			<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
				Checkout
			</h1>
			<Formik
				initialValues={{
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
				}}
				validationSchema={deliveryDetailsSchema}
				onSubmit={async (values) => {
					await fetch('/api/orders', {
						method: 'POST',
						body: JSON.stringify({
							userDetails: {
								name: values.name,
								street: values.street,
								additional: values.additional,
								city: values.city,
								phone: values.phone,
							},
							items: [
								{ itemId: 'test1', itemCount: 2 },
								{ itemId: 'test2', itemCount: 4 },
							],
							paymentMethod: values.paymentMethod,
							total: values.total,
						}),
					});

					setCartState([]);
					updateLocalStorage([]);
					router.push('/order/success');
				}}
			>
				<Form className="flex flex-col w-11/12 max-w-5xl gap-10 py-10 lg:flex-row font-karla text-green">
					<div className="flex flex-col w-full gap-4 lg:w-2/3 ">
						<h3 className="text-xl">Delivery Address</h3>
						<div className="flex flex-col gap-1">
							<label htmlFor="name">Full Name</label>
							<Field
								type="text"
								name="name"
								id="name"
								placeholder="John Doe"
								className="p-4 font-bold border rounded-md border-green"
							/>
							<ErrorMessage name="name" />
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="street">Street & Number</label>
							<Field
								type="text"
								name="street"
								id="street"
								placeholder="Main Street 10"
								className="p-4 font-bold border rounded-md border-green"
							/>
							<ErrorMessage name="street" />
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="additional">Floor / Door</label>
							<Field
								type="text"
								name="additional"
								id="additional"
								placeholder="Floor 1, Door 11"
								className="p-4 font-bold border rounded-md border-green"
							/>
							<ErrorMessage name="additional" />
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="city">City</label>
							<Field
								type="text"
								name="city"
								id="city"
								placeholder="Anytown"
								className="p-4 font-bold border rounded-md border-green"
							/>
							<ErrorMessage name="city" />
						</div>
						<div className="flex flex-col gap-1">
							<label htmlFor="phone">Number</label>
							<Field
								type="number"
								name="phone"
								id="phone"
								placeholder="Your phone number"
								className="p-4 font-bold border rounded-md border-green"
							/>
							<ErrorMessage name="phone" />
						</div>
						<div>
							<h3>Payment Method:</h3>
							<div className="flex gap-4 mt-2">
								<label
									className={`flex flex-col items-center justify-center px-5 py-2 transition-colors border rounded-md cursor-pointer w-28 hover:bg-green hover:text-white  ${
										selectedPaymentMethod === 'cash'
											? 'bg-green text-white'
											: 'border-green text-green'
									}`}
								>
									<FontAwesomeIcon icon={faMoneyBillWave} className="h-12" />
									<p>Cash</p>
									<Field
										type="radio"
										name="paymentMethod"
										id="paymentMethod"
										value="cash"
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
							<ErrorMessage name="paymentMethod" />
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
								{/* <div className="flex flex-col gap-1">
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
								</div> */}
							</div>
							<button
								type="submit"
								className="px-4 py-3 font-bold text-center transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
							>
								Order now!
							</button>
						</div>
					</div>
				</Form>
			</Formik>
		</section>
	);
};

export default page;

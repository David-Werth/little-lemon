'use client';

import { TotalCartValueContext } from '@/context/TotalCartValueContext';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import {
	faCreditCard,
	faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useContext, useState } from 'react';

const page = () => {
	const { total } = useContext(TotalCartValueContext);

	const [coupon, setCoupon] = useState('');
	const [isCouponValid, setIsCouponValid] = useState(false);
	const couponValue = 5;

	const [name, setName] = useState('');
	const [street, setStreet] = useState('');
	const [additional, setAdditional] = useState('');
	const [city, setCity] = useState('');
	const [paymentMethod, setPaymentMethod] = useState('');

	const [formData, setFormData] = useState({});

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleCouponApply = () => {
		if (coupon.toUpperCase() === 'ALL4FREE') {
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
			<form className="flex flex-col w-11/12 max-w-5xl gap-10 py-10 lg:flex-row font-karla text-green">
				<div className="flex flex-col w-full gap-4 lg:w-2/3 ">
					<h3 className="text-xl">Delivery Address</h3>
					<div className="flex flex-col gap-1">
						<label htmlFor="name">Full Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="John Doe"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="p-4 font-bold border rounded-md border-green"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="street">Street & Number</label>
						<input
							type="text"
							name="street"
							id="street"
							placeholder="Main Street 10"
							value={street}
							onChange={(e) => setStreet(e.target.value)}
							className="p-4 font-bold border rounded-md border-green"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="additional">Floor / Door</label>
						<input
							type="text"
							name="additional"
							id="additional"
							placeholder="Floor 1, Door 11"
							value={additional}
							onChange={(e) => setAdditional(e.target.value)}
							className="p-4 font-bold border rounded-md border-green"
						/>
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="city">City</label>
						<input
							type="text"
							name="city"
							id="city"
							placeholder="Anytown"
							value={city}
							onChange={(e) => setCity(e.target.value)}
							className="p-4 font-bold border rounded-md border-green"
						/>
					</div>
					<div>
						<h3>Payment Method:</h3>
						<div className="flex gap-4 mt-2">
							<div
								className={`flex flex-col items-center justify-center px-5 py-2 transition-colors border rounded-md cursor-pointer w-28 hover:bg-green hover:text-white  ${
									paymentMethod === 'cash'
										? 'bg-green text-white'
										: 'border-green text-green'
								}`}
								onClick={() => setPaymentMethod('cash')}
							>
								<FontAwesomeIcon icon={faMoneyBillWave} className="h-12" />
								<p>Cash</p>
							</div>
							<div className="flex flex-col items-center justify-center px-5 py-2 text-gray-500 transition-colors bg-gray-300 border border-gray-400 rounded-md cursor-not-allowed w-28">
								<FontAwesomeIcon icon={faCreditCard} className="h-12" />
								<p>Card</p>
							</div>
							<div className="flex flex-col items-center justify-center px-5 py-2 text-gray-500 transition-colors bg-gray-300 border border-gray-400 rounded-md cursor-not-allowed w-28">
								<FontAwesomeIcon icon={faPaypal} className="h-12" />
								<p>PayPal</p>
							</div>
						</div>
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
										placeholder="TRY: ALL4FREE"
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
							onClick={handleSubmit}
							className="px-4 py-3 font-bold text-center transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
						/>
					</div>
				</div>
			</form>
		</section>
	);
};

export default page;

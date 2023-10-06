'use client';

import { useState } from 'react';

const OrderSummary = ({ total }) => {
	const [coupon, setCoupon] = useState('');
	const deliveryFee = 2.99;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('test');
	};

	return (
		<div className="flex flex-col w-full lg:w-1/3">
			<h3 className="text-xl">Order Summary</h3>
			<form onSubmit={handleSubmit} className="flex flex-col gap-8 pt-2">
				<div className="flex flex-col ">
					<label htmlFor="coupon">ADD COUPON</label>
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
				</div>

				<div>
					<p>Your order: ${total}</p>
					<p>+ Delivery fees: ${deliveryFee}</p>
					<div className="w-full h-[1px] bg-green mb-1"></div>
					<p className="font-bold">
						= Total: ${total ? (total + deliveryFee).toFixed(2) : 0}
					</p>
				</div>
				<input
					type="submit"
					value="Go to checkout"
					className="px-4 py-3 font-bold text-center transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
				/>
			</form>
		</div>
	);
};

export default OrderSummary;

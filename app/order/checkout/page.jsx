'use client';

import CheckoutForm from '@/components/order/checkout/CheckoutForm';
import { TotalCartValueContext } from '@/context/TotalCartValueContext';
import { useContext, useState } from 'react';

const getMenuItems = async () => {
	try {
		const res = await fetch('/api/menu-items', {
			// cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch menu items');
		}
		return res.json();
	} catch (error) {
		console.log('Error loading menu items:', error);
	}
};

const page = () => {
	const [coupon, setCoupon] = useState('');
	const { total } = useContext(TotalCartValueContext);

	return (
		<section className="flex flex-col items-center w-full">
			<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
				Checkout
			</h1>

			<div className="flex flex-col w-11/12 max-w-5xl gap-10 py-10 lg:flex-row font-karla text-green">
				<CheckoutForm />
				<form className="w-full lg:w-1/3">
					<h3 className="text-xl">Order Summary</h3>
					<div className="flex flex-col gap-5 pt-2">
						<div className="flex flex-col gap-2">
							<p>Subtotal: ${total}</p>
							<p>+ Delivery fees: $2.99</p>
							<div className="w-full h-[1px] bg-green mb-1"></div>
							<p className="font-bold">
								= Total: ${total ? (total + 2.99).toFixed(2) : 0}
							</p>
							<div className="flex flex-col gap-1">
								<label htmlFor="coupon">ADD COUPON</label>
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
										type="submit"
										value="apply"
										className="p-4 font-bold border rounded-md cursor-pointer border-green hover:bg-green hover:text-white"
									/>
								</div>
							</div>
						</div>
						<button className='className="px-4 py-3 font-bold text-center transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"'>
							Order now!
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default page;

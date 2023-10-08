'use client';

import { LocalStorageContext } from '@/context/LocalStorageContext';
import { useContext, useEffect, useState } from 'react';

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
	const [total, setTotal] = useState(0);

	return (
		<section className="flex flex-col items-center w-full">
			<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
				Checkout
			</h1>
			<div className="flex flex-col w-11/12 max-w-5xl gap-4 py-10 lg:flex-row font-karla text-green">
				<form>
					<div className="flex flex-col ">
						<label htmlFor="coupon">ADD COUPON</label>
						<p>{total}</p>
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
				</form>
			</div>
		</section>
	);
};

export default page;

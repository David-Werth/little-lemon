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

const OrderSummary = () => {
	const [total, setTotal] = useState(0);
	const { cartState } = useContext(LocalStorageContext);

	useEffect(() => {
		(async () => {
			const { menuItems } = await getMenuItems();
			let totalSum = 0;

			menuItems.map((i) => {
				cartState.map((j) => {
					if (i._id === j.itemId) {
						totalSum = totalSum + i.price * j.itemCount;
					}
				});
			});

			setTotal(totalSum.toFixed(2));
		})();

		return () => {
			// this now gets called when the component unmounts
		};
	}, [cartState]);

	return (
		<div className="w-full lg:w-1/3">
			<h3>Order Summary</h3>
			<div>
				<p>${total}</p>
			</div>
		</div>
	);
};

export default OrderSummary;

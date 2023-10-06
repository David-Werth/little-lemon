'use client';

import { useContext, useEffect, useState } from 'react';
import { LocalStorageContext } from '@/context/LocalStorageContext';

import OrderSummary from '@/components/order/cart/OrderSummary';
import ShoppingCart from '@/components/order/cart/ShoppingCart';

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
	const [menuItems, setMenuItems] = useState([]);
	const { cartState } = useContext(LocalStorageContext);
	const [isLoading, setIsLoading] = useState(true);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		(async () => {
			const { menuItems } = await getMenuItems();
			let filteredMenuItems = [];
			setIsLoading(true);
			let totalSum = 0;

			menuItems.map((i) => {
				cartState.map((j) => {
					if (i._id === j.itemId) {
						filteredMenuItems = [...filteredMenuItems, i];
						totalSum = totalSum + i.price * j.itemCount;
					}
				});
			});

			setMenuItems(filteredMenuItems);
			setIsLoading(false);
			setTotal(parseFloat(totalSum.toFixed(2)));
		})();

		return () => {};
	}, [cartState]);

	return (
		<section className="flex flex-col items-center w-full">
			<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
				Shopping Cart
			</h1>
			<div className="flex flex-col w-11/12 max-w-5xl gap-4 py-10 lg:flex-row font-karla text-green">
				<ShoppingCart menuItems={menuItems} isLoading={isLoading} />
				<OrderSummary menuItems={menuItems} isLoading={isLoading} total={total} />
			</div>
		</section>
	);
};

export default page;

'use client';

import { useContext, useEffect, useState } from 'react';
import CartItem from './CartItem';
import { LocalStorageContext } from '@/context/LocalStorageContext';

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

const ShoppingCart = () => {
	const [menuItems, setMenuItems] = useState([]);
	const { cartState } = useContext(LocalStorageContext);

	useEffect(() => {
		(async () => {
			const { menuItems } = await getMenuItems();
			let filteredMenuItems = [];

			menuItems.map((i) => {
				cartState.map((j) => {
					if (i._id === j.itemId) {
						filteredMenuItems = [...filteredMenuItems, i];
					}
				});
			});

			setMenuItems(filteredMenuItems);
		})();

		return () => {};
	}, [cartState]);

	return (
		<div className="w-full h-full pr-2 lg:w-2/3 lg:border-r border-green">
			<div className="grid grid-cols-4 gap-3">
				<h3 className="col-span-2">Product</h3>
				<h3>Quantity</h3>
				<h3>Total</h3>
			</div>
			<div className="grid gap-2 auto-rows-fr">
				{menuItems.map((i) => {
					return (
						<CartItem
							key={i._id}
							itemId={i._id}
							title={i.title}
							price={i.price}
							img={i.img}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ShoppingCart;

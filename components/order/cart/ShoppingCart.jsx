'use client';

import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import getLocalStorage from '@/utils/getLocalStorage';

const getInitState = () => {
	let initCart = [];
	let localCart = getLocalStorage();
	return localCart ? localCart : initCart;
};

const getMenuItems = async () => {
	try {
		const res = await fetch('/api/menu-items', {
			cache: 'no-store',
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

	useEffect(() => {
		(async () => {
			const { menuItems } = await getMenuItems();
			setMenuItems(menuItems);
		})();

		return () => {
			// this now gets called when the component unmounts
		};
	}, []);

	return (
		<div className="w-full h-full lg:w-2/3 lg:border-r border-green">
			<div className="grid grid-cols-4">
				<h3 className="col-span-2">Product</h3>
				<h3>Quantity</h3>
				<h3>Total</h3>
			</div>
			<div></div>
		</div>
	);
};

export default ShoppingCart;

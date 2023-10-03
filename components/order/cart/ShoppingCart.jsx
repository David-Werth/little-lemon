'use client';

import { useEffect, useState } from 'react';
import CartItem from './CartItem';
import getLocalStorage from '@/utils/getLocalStorage';
import updateLocalStorage from '@/utils/updateLocalStorage';

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
	const [cartState, setCartState] = useState(getInitState);

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

		return () => {
			// this now gets called when the component unmounts
		};
	}, [cartState]);

	const updateCart = (updatedItem) => {
		// checking if item exists and updating count
		const newCartState = cartState.map((i) => {
			if (i.itemId === updatedItem.itemId) {
				return updatedItem;
			} else {
				return i;
			}
		});
		setCartState(newCartState);
		updateLocalStorage(newCartState);
	};

	const addItemToCart = (item) => {
		const newCartState = [...cartState, item];
		let exists = false;

		//checking if item exists
		cartState.map((i) => {
			if (i.itemId === item.itemId) {
				exists = true;
				return;
			}
		});
		if (!exists) {
			setCartState(newCartState);
			updateLocalStorage(cartState);
		}
	};

	const removeItemFromCart = (item) => {
		let newCartState = cartState.filter((i) => i.itemId !== item.itemId);
		setCartState(newCartState);
		updateLocalStorage(cartState);
	};

	return (
		<div className="w-full h-full pr-2 lg:w-2/3 lg:border-r border-green">
			<div className="grid grid-cols-4 gap-3">
				<h3 className="col-span-2">Product</h3>
				<h3>Quantity</h3>
				<h3>Total</h3>
			</div>
			<div className="grid gap-2">
				{menuItems.map((i) => {
					return (
						<CartItem
							updateCart={updateCart}
							addItemToCart={addItemToCart}
							removeItemFromCart={removeItemFromCart}
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

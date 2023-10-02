'use client';

import getLocalStorage from '@/utils/getLocalStorage';
import updateLocalStorage from '@/utils/updateLocalStorage';

import MenuItem from '@/components/order/MenuItem';
import MenuNav from '@/components/order/MenuNav';
import { useEffect, useState } from 'react';

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

const Page = () => {
	const [cartState, setCartState] = useState(getInitState);
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
		<section className="flex flex-col items-center w-full">
			<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
				Discover our menu
			</h1>
			<div className="w-11/12 max-w-5xl">
				<MenuNav />
				<div className="py-12" id="starters">
					<h2 className="mb-4 text-4xl font-karla text-green">Starters</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-fr">
						{menuItems.map((i) => {
							if (i.category === 'starters') {
								return (
									<MenuItem
										updateCart={updateCart}
										addItemToCart={addItemToCart}
										removeItemFromCart={removeItemFromCart}
										key={i._id}
										itemId={i._id}
										title={i.title}
										price={i.price}
										description={i.description}
										img={i.img}
									/>
								);
							}
						})}
					</div>
				</div>
				<div className="py-12" id="mains">
					<h2 className="mb-4 text-4xl font-karla text-green">Mains</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-fr">
						{menuItems.map((i) => {
							if (i.category === 'mains') {
								return (
									<MenuItem
										updateCart={updateCart}
										addItemToCart={addItemToCart}
										removeItemFromCart={removeItemFromCart}
										key={i._id}
										itemId={i._id}
										title={i.title}
										price={i.price}
										description={i.description}
										img={i.img}
									/>
								);
							}
						})}
					</div>
				</div>
				<div className="py-12" id="desserts">
					<h2 className="mb-4 text-4xl font-karla text-green">Desserts</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-fr">
						{menuItems.map((i) => {
							if (i.category === 'desserts') {
								return (
									<MenuItem
										updateCart={updateCart}
										addItemToCart={addItemToCart}
										removeItemFromCart={removeItemFromCart}
										key={i._id}
										itemId={i._id}
										title={i.title}
										price={i.price}
										description={i.description}
										img={i.img}
									/>
								);
							}
						})}
					</div>
				</div>
				<div className="py-12" id="drinks">
					<h2 className="mb-4 text-4xl font-karla text-green">Drinks</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-fr">
						{menuItems.map((i) => {
							if (i.category === 'drinks') {
								return (
									<MenuItem
										updateCart={updateCart}
										addItemToCart={addItemToCart}
										removeItemFromCart={removeItemFromCart}
										key={i._id}
										itemId={i._id}
										title={i.title}
										price={i.price}
										description={i.description}
										img={i.img}
									/>
								);
							}
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;

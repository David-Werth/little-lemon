'use client';

import MenuItem from '@/components/MenuItem';
import MenuNav from '@/components/MenuNav';
import getLocalStorage from '@/utils/getLocalStorage';
import updateLocalStorage from '@/utils/updateLocalStorage';
import { useState } from 'react';

import {
	mockMenuStarters,
	mockMenuMains,
	mockMenuDesserts,
	mockMenuDrinks,
} from '@/mock/mockMenu';

const getInitState = () => {
	let initCart = [];
	let localCart = getLocalStorage();
	return localCart ? localCart : initCart;
};

const Page = () => {
	const [cartState, setCartState] = useState(getInitState);

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
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						{mockMenuStarters.map((i) => {
							return (
								<MenuItem
									updateCart={updateCart}
									addItemToCart={addItemToCart}
									removeItemFromCart={removeItemFromCart}
									key={i.itemId}
									itemId={i.itemId}
									title={i.title}
									price={i.price}
									description={i.description}
								/>
							);
						})}
					</div>
				</div>
				<div className="py-12" id="mains">
					<h2 className="mb-4 text-4xl font-karla text-green">Mains</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						{mockMenuMains.map((i) => {
							return (
								<MenuItem
									updateCart={updateCart}
									addItemToCart={addItemToCart}
									removeItemFromCart={removeItemFromCart}
									key={i.itemId}
									itemId={i.itemId}
									title={i.title}
									price={i.price}
									description={i.description}
								/>
							);
						})}
					</div>
				</div>
				<div className="py-12" id="desserts">
					<h2 className="mb-4 text-4xl font-karla text-green">Desserts</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						{mockMenuDesserts.map((i) => {
							return (
								<MenuItem
									updateCart={updateCart}
									addItemToCart={addItemToCart}
									removeItemFromCart={removeItemFromCart}
									key={i.itemId}
									itemId={i.itemId}
									title={i.title}
									price={i.price}
									description={i.description}
								/>
							);
						})}
					</div>
				</div>
				<div className="py-12" id="drinks">
					<h2 className="mb-4 text-4xl font-karla text-green">Drinks</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						{mockMenuDrinks.map((i) => {
							return (
								<MenuItem
									updateCart={updateCart}
									addItemToCart={addItemToCart}
									removeItemFromCart={removeItemFromCart}
									key={i.itemId}
									itemId={i.itemId}
									title={i.title}
									price={i.price}
									description={i.description}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;

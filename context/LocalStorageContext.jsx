'use client';

import getLocalStorage from '@/utils/getLocalStorage';
import updateLocalStorage from '@/utils/updateLocalStorage';
import { createContext, useState } from 'react';

export const LocalStorageContext = createContext();

const getInitState = () => {
	let initCart = [];
	let localCart = getLocalStorage();
	return localCart ? localCart : initCart;
};

export const LocalStorageWrapper = ({ children }) => {
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
		<LocalStorageContext.Provider
			value={{ addItemToCart, removeItemFromCart, updateCart, cartState }}
		>
			{children}
		</LocalStorageContext.Provider>
	);
};

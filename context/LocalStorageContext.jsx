'use client';

import { createContext, useState } from 'react';

export const LocalStorageContext = createContext();

const getLocalStorage = () => {
	if (typeof window !== 'undefined') {
		let data = window.localStorage.getItem('USER_CART');
		data = JSON.parse(data);
		return data;
	}
};

const updateLocalStorage = (state) => {
	localStorage.setItem('USER_CART', JSON.stringify(state));
};

const getInitState = () => {
	let initCart = [];
	let localCart = getLocalStorage();
	return localCart ? localCart : initCart;
};

const getInitCount = (itemId) => {
	if (getLocalStorage()) {
		let localCount = 0;
		getLocalStorage().map((i) => {
			if (i.itemId === itemId) {
				localCount = parseInt(i.itemCount);
			}
		});
		return localCount;
	}
	return 0;
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
			updateLocalStorage(newCartState);
		}
	};

	const removeItemFromCart = (item) => {
		let newCartState = cartState.filter((i) => i.itemId !== item.itemId);
		setCartState(newCartState);
		updateLocalStorage(newCartState);
	};

	return (
		<LocalStorageContext.Provider
			value={{
				addItemToCart,
				removeItemFromCart,
				updateCart,
				cartState,
				getInitCount,
				setCartState,
				updateLocalStorage,
			}}
		>
			{children}
		</LocalStorageContext.Provider>
	);
};

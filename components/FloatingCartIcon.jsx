'use client';

import Link from 'next/link';
import getLocalStorage from '@/utils/getLocalStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const getInitState = () => {
	let initCart = [];
	let localCart = getLocalStorage();
	return localCart ? localCart.length : initCart;
};

const FloatingCartIcon = () => {
	const [cartState, setCartState] = useState(getInitState);
	return (
		<div className="h-8 bg-white rounded-full cursor-pointer">
			<p>{cartState}</p>
			{/* <Link href="#" className="fixed z-50 bottom-16 left-9">
				<FontAwesomeIcon icon={faCartShopping} />
			</Link> */}
		</div>
	);
};

export default FloatingCartIcon;

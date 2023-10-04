'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import getLocalStorage from '@/utils/getLocalStorage';

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

const CartItem = ({
	itemId,
	title,
	price,
	img,
	updateCart,
	removeItemFromCart,
}) => {
	const [itemCount, setItemCount] = useState(getInitCount(itemId));
	const [err, setErr] = useState(false);

	const handleIncrease = () => {
		if (itemCount < 99) {
			const increasedCount = parseInt(itemCount) + 1;
			setItemCount(increasedCount);
		} else {
			setErr(true);
		}
	};

	const handleDecrease = () => {
		const item = { itemId, itemCount };
		if (itemCount >= 1) {
			const decreasedCount = parseInt(itemCount) - 1;
			setItemCount(decreasedCount);
			if (decreasedCount === 0) {
				removeItemFromCart(item);
			}
		}
	};

	useEffect(() => {
		const item = { itemId, itemCount };
		updateCart(item);
	}, [itemCount]);

	return (
		<div className="grid grid-cols-4 gap-3 overflow-hidden font-bold bg-gray-100 select-none rounded-2xl text-green font-karla min-h-[80px]">
			<div className="flex items-center col-span-2 gap-2">
				<Image
					src={img}
					alt={title}
					width={500}
					height={500}
					className="flex-none object-cover w-16 h-full bg-green"
				/>
				<h4>{title}</h4>
			</div>
			<div className="flex items-center gap-2 md:gap-7">
				<FontAwesomeIcon
					icon={faMinus}
					onClick={handleDecrease}
					className="cursor-pointer"
				/>
				<p>{itemCount}</p>
				<FontAwesomeIcon
					icon={faPlus}
					onClick={handleIncrease}
					className="cursor-pointer"
				/>
			</div>
			<span className="self-center text-base text-orange-500">
				${(price * itemCount).toFixed(2)}
			</span>
		</div>
	);
};

export default CartItem;
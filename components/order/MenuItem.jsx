'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCartShopping,
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
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

const MenuItem = ({
	itemId,
	title,
	price,
	description,
	img,
	updateCart,
	addItemToCart,
	removeItemFromCart,
}) => {
	const [isInCart, setIsInCart] = useState(false);
	const [itemCount, setItemCount] = useState(getInitCount(itemId));
	const [err, setErr] = useState(false);

	const handleAdd = () => {
		setItemCount(1);
		const item = { itemId, itemCount };
		addItemToCart(item);
	};

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
		if (itemCount >= 1) {
			setIsInCart(true);
		} else {
			setIsInCart(false);
		}
	}, [itemCount]);

	return (
		<div className="overflow-hidden bg-gray-100 rounded-2xl [&>div>img]:hover:scale-110 select-none flex min-h-[241.61px]">
			<div className="flex flex-col justify-between w-2/3 gap-3 p-4 text-green font-karla">
				<div className="flex justify-between text-lg font-bold">
					<h4>{title}</h4>
					<span className="text-base text-orange-500">${price}</span>
				</div>
				<p>{description}</p>
				{!isInCart ? (
					<span onClick={handleAdd} className="font-bold w-fit">
						<p className="inline cursor-pointer">Add to cart</p>
						<FontAwesomeIcon
							icon={faCartShopping}
							className="inline h-4 ml-3 cursor-pointer"
						/>
					</span>
				) : (
					<span className="flex items-center font-bold gap-7">
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
					</span>
				)}
			</div>
			<Image
				src={img}
				alt={title}
				width={500}
				height={500}
				className="object-cover w-1/3 h-full transition-all bg-green"
			/>
		</div>
	);
};

export default MenuItem;

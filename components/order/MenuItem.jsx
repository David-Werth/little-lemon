'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCartShopping,
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { LocalStorageContext } from '@/context/LocalStorageContext';

const MenuItem = ({ itemId, title, price, description, img }) => {
	const { addItemToCart, removeItemFromCart, updateCart, getInitCount } =
		useContext(LocalStorageContext);
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

	const handleInputChange = (e) => {
		setItemCount(e.target.value);
	};

	const handleInputBlur = () => {
		if (itemCount === '') {
			const item = { itemId, itemCount };
			removeItemFromCart(item);
			setIsInCart(false);
		}
	};

	useEffect(() => {
		const item = { itemId, itemCount };
		updateCart(item);
		if (itemCount >= 1) {
			setIsInCart(true);
		} else if (itemCount === 0) {
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
					<span className="flex items-center gap-4 font-bold">
						<FontAwesomeIcon
							icon={faMinus}
							onClick={handleDecrease}
							className="cursor-pointer"
						/>
						<input
							type="number"
							value={itemCount}
							onChange={handleInputChange}
							onBlur={handleInputBlur}
							min="0"
							max="99"
							className="w-[30px] text-center border-2 border-green rounded-lg"
						></input>
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
				priority={true}
				className="object-cover w-1/3 h-full transition-all bg-gray-200"
			/>
		</div>
	);
};

export default MenuItem;

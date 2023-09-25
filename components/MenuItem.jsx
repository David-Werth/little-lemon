'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCartShopping,
	faMinus,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import img from '../public/special3.jpg';

const MenuItem = ({ title, price, description }) => {
	const [isInCart, setIsInCart] = useState(false);
	const [itemCount, setItemCount] = useState(0);
	const [err, setErr] = useState(false);

	const handleAdd = () => {
		setIsInCart((prev) => !prev);
		setItemCount(1);
	};

	const handleIncrease = () => {
		if (itemCount < 99) {
			let increasedCount = itemCount + 1;
			setItemCount(increasedCount);
		} else {
			setErr(true);
		}
	};

	const handleDecrease = () => {
		if (itemCount > 1) {
			let decreasedCount = itemCount - 1;
			setItemCount(decreasedCount);
		} else {
			setIsInCart(false);
		}
	};

	return (
		<div className="overflow-hidden bg-gray-100 rounded-2xl [&>div>img]:hover:scale-110 flex select-none">
			<div className="flex flex-col justify-between w-2/3 gap-3 p-4 text-green font-karla">
				<div className="flex items-center justify-between text-lg font-bold">
					<h4>{title}</h4>
					<span className="text-base text-orange-500">{price}</span>
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
			<div className="flex-1 overflow-hidden">
				<Image
					src={img}
					alt={title}
					className="object-cover w-full h-full transition-all bg-green"
				/>
			</div>
		</div>
	);
};

export default MenuItem;

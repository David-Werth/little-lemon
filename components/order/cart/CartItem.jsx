'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useContext, useEffect, useState } from 'react';
import { LocalStorageContext } from '@/context/LocalStorageContext';

const CartItem = ({ itemId, title, price, img }) => {
	const { removeItemFromCart, updateCart, getInitCount } =
		useContext(LocalStorageContext);
	const [itemCount, setItemCount] = useState(getInitCount(itemId));
	const [isInCart, setIsInCart] = useState(true);
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
				setIsInCart(false);
				removeItemFromCart(item);
			}
		}
	};

	const handleDelete = () => {
		const item = { itemId, itemCount };
		setIsInCart(false);
		removeItemFromCart(item);
	};

	const handleInputChange = (e) => {
		setItemCount(parseInt(e.target.value));
	};

	const handleInputBlur = (e) => {
		if (e.target.value === '') {
			const item = { itemId, itemCount };
			removeItemFromCart(item);
			setIsInCart(false);
		} else {
			setItemCount(parseInt(e.target.value));
		}
	};

	useEffect(() => {
		const item = { itemId, itemCount };
		updateCart(item);

		if (itemCount === 0) {
			removeItemFromCart(item);
		}
	}, [itemCount]);

	return (
		<>
			{isInCart && (
				<div className="grid grid-cols-4 gap-3 font-bold bg-gray-100 select-none rounded-md text-green font-karla min-h-[80px] relative">
					<div className="flex items-center col-span-2 gap-2 overflow-hidden rounded-l-md">
						<Image
							src={img}
							alt={title}
							width={500}
							height={500}
							priority={true}
							className="flex-none object-cover w-16 h-full bg-green"
						/>
						<h4>{title}</h4>
					</div>
					<div className="flex items-center gap-2 md:gap-4">
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
					</div>
					<span className="self-center text-base text-orange-500">
						${(price * itemCount).toFixed(2)}
					</span>

					<FontAwesomeIcon
						icon={faTrashCan}
						onClick={handleDelete}
						className="absolute z-40 h-5 transition-colors cursor-pointer -right-1 -top-2 hover:text-red-600"
					/>
				</div>
			)}
		</>
	);
};

export default CartItem;

'use client';

import { getAllMenuItems } from '@/libs/actions/menu.actions';
import SpecialsCard from './SpecialsCard';
import { useEffect, useState } from 'react';
import MenuItemSkeleton from '../order/MenuItemSkeleton';

export const Specials = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			const allMenuItems = await getAllMenuItems();
			let filteredMenuItems = [];
			setIsLoading(true);

			allMenuItems.map((i) => {
				if (i.isSpecial) {
					filteredMenuItems = [...filteredMenuItems, i];
				}
			});
			setMenuItems(filteredMenuItems);
			setIsLoading(false);
		})();

		return () => {};
	}, []);

	return (
		<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{isLoading && (
				<>
					<MenuItemSkeleton />
					<MenuItemSkeleton />
					<MenuItemSkeleton />
				</>
			)}
			{menuItems.map((i) => {
				return (
					<SpecialsCard
						key={i._id}
						img={i.img}
						title={i.title}
						price={`$${i.price}`}
						description={i.description}
					/>
				);
			})}
		</div>
	);
};

'use client';

import MenuItem from '@/components/order/MenuItem';
import MenuItemSkeleton from '@/components/order/MenuItemSkeleton';
import MenuNav from '@/components/order/MenuNav';
import GoToCart from '@/components/shared/GoToCart';
import { getAllMenuItems } from '@/libs/actions/menu.actions';
import { useEffect, useState } from 'react';

const Page = () => {
	const [menuItems, setMenuItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			const menuItems = await getAllMenuItems();
			setMenuItems(menuItems);
			setIsLoading(false);
		})();

		return () => {};
	}, []);

	return (
		<>
			<section className="flex flex-col items-center w-full">
				<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
					Discover our menu
				</h1>
				<div className="w-11/12 max-w-5xl">
					<MenuNav />
					<div className="py-12" id="starters">
						<h2 className="mb-4 text-4xl font-karla text-green">Starters</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-fr">
							{isLoading ? (
								<>
									<MenuItemSkeleton />
									<MenuItemSkeleton />
									<MenuItemSkeleton />
									<MenuItemSkeleton />
								</>
							) : (
								menuItems.map((i) => {
									if (i.category === 'starters') {
										return (
											<MenuItem
												key={i._id}
												itemId={i._id}
												title={i.title}
												price={i.price}
												description={i.description}
												img={i.img}
											/>
										);
									}
								})
							)}
						</div>
					</div>
					<div className="py-12" id="mains">
						<h2 className="mb-4 text-4xl font-karla text-green">Mains</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-fr">
							{isLoading ? (
								<>
									<MenuItemSkeleton />
									<MenuItemSkeleton />
									<MenuItemSkeleton />
									<MenuItemSkeleton />
								</>
							) : (
								menuItems.map((i) => {
									if (i.category === 'mains') {
										return (
											<MenuItem
												key={i._id}
												itemId={i._id}
												title={i.title}
												price={i.price}
												description={i.description}
												img={i.img}
											/>
										);
									}
								})
							)}
						</div>
					</div>
					<div className="py-12" id="desserts">
						<h2 className="mb-4 text-4xl font-karla text-green">Desserts</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-fr">
							{isLoading ? (
								<>
									<MenuItemSkeleton />
									<MenuItemSkeleton />
									<MenuItemSkeleton />
									<MenuItemSkeleton />
								</>
							) : (
								menuItems.map((i) => {
									if (i.category === 'desserts') {
										return (
											<MenuItem
												key={i._id}
												itemId={i._id}
												title={i.title}
												price={i.price}
												description={i.description}
												img={i.img}
											/>
										);
									}
								})
							)}
						</div>
					</div>
					<div className="py-12" id="drinks">
						<h2 className="mb-4 text-4xl font-karla text-green">Drinks</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-7 auto-rows-fr">
							{isLoading ? (
								<>
									<MenuItemSkeleton />
									<MenuItemSkeleton />
									<MenuItemSkeleton />
									<MenuItemSkeleton />
								</>
							) : (
								menuItems.map((i) => {
									if (i.category === 'drinks') {
										return (
											<MenuItem
												key={i._id}
												itemId={i._id}
												title={i.title}
												price={i.price}
												description={i.description}
												img={i.img}
											/>
										);
									}
								})
							)}
						</div>
					</div>
				</div>
			</section>

			<GoToCart />
		</>
	);
};

export default Page;

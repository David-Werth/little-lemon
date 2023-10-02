import MenuItem from '@/components/order/MenuItem';
import MenuNav from '@/components/order/MenuNav';
import { useEffect, useState } from 'react';

const getMenuItems = async () => {
	console.log('getting');
	try {
		const res = await fetch('/api/menu-items', {
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('Failed to fetch menu items');
		}
		return res.json();
	} catch (error) {
		console.log('Error loading menu items:', error);
	}
};

const Menu = (updateCart, addItemToCart, removeItemFromCart) => {
	const [menuItems, setMenuItems] = useState([]);
	console.log(menuItems);

	useEffect(() => {
		(async () => {
			const { menuItems } = await getMenuItems();
			setMenuItems(menuItems);
		})();

		return () => {
			// this now gets called when the component unmounts
		};
	}, []);

	return (
		<div className="w-11/12 max-w-5xl">
			<MenuNav />
			<div className="py-12" id="starters">
				<h2 className="mb-4 text-4xl font-karla text-green">Starters</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
					{menuItems.map((i) => {
						if (i.category === 'starters') {
							return (
								<MenuItem
									updateCart={updateCart}
									addItemToCart={addItemToCart}
									removeItemFromCart={removeItemFromCart}
									key={i._id}
									itemId={i._id}
									title={i.title}
									price={i.price}
									description={i.description}
									img={i.img}
								/>
							);
						}
					})}
				</div>
			</div>
			<div className="py-12" id="mains">
				<h2 className="mb-4 text-4xl font-karla text-green">Mains</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
					{/* {menuItems.map((i) => {
						if (i.category === 'mains') {
							return (
								<MenuItem
									updateCart={updateCart}
									addItemToCart={addItemToCart}
									removeItemFromCart={removeItemFromCart}
									key={i._id}
									itemId={i._id}
									title={i.title}
									price={i.price}
									description={i.description}
									img={i.img}
								/>
							);
						}
					})} */}
				</div>
			</div>
			<div className="py-12" id="desserts">
				<h2 className="mb-4 text-4xl font-karla text-green">Desserts</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
					{/* {menuItems.map((i) => {
						if (i.category === 'desserts') {
							return (
								<MenuItem
									updateCart={updateCart}
									addItemToCart={addItemToCart}
									removeItemFromCart={removeItemFromCart}
									key={i._id}
									itemId={i._id}
									title={i.title}
									price={i.price}
									description={i.description}
									img={i.img}
								/>
							);
						}
					})} */}
				</div>
			</div>
			<div className="py-12" id="drinks">
				<h2 className="mb-4 text-4xl font-karla text-green">Drinks</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
					{/* {menuItems.map((i) => {
						if (i.category === 'drinks') {
							return (
								<MenuItem
									updateCart={updateCart}
									addItemToCart={addItemToCart}
									removeItemFromCart={removeItemFromCart}
									key={i._id}
									itemId={i._id}
									title={i.title}
									price={i.price}
									description={i.description}
									img={i.img}
								/>
							);
						}
					})} */}
				</div>
			</div>
		</div>
	);
};

export default Menu;

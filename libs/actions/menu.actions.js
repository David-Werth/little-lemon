'use server';

import { MenuItem } from '../models/menuItemModel';
import connectMongoDB from '../mongodb';

export async function getAllMenuItems() {
	try {
		await connectMongoDB();

		const menuItems = await JSON.parse(JSON.stringify(await MenuItem.find()));
		return menuItems;
	} catch (error) {
		console.log(error);
	}
}

// export async function getMenuItemsInCart() {
// 	try {
// 		connectMongoDB();

// 		const menuItems = await JSON.parse(JSON.stringify(await MenuItem.find()));
// 		return menuItems;
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

import Link from 'next/link';

const MenuNav = () => {
	return (
		<ul className="flex justify-end gap-3 pt-5 text-lg font-karla">
			<Link href="#starters">Starters</Link>
			<Link href="#mains">Mains</Link>
			<Link href="#desserts">Desserts</Link>
			<Link href="#drinks">Drinks</Link>
		</ul>
	);
};

export default MenuNav;

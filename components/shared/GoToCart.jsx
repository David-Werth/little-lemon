import Link from 'next/link';

const GoToCart = () => {
	return (
		<Link
			href="/order/cart"
			className="fixed inset-x-0 max-w-[200px] px-4 py-3 mx-auto font-bold text-center transition-colors border-4 rounded-full bottom-4 hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
		>
			Go to cart
		</Link>
	);
};

export default GoToCart;

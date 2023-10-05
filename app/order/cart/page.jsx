import OrderSummary from '@/components/order/cart/OrderSummary';
import ShoppingCart from '@/components/order/cart/ShoppingCart';

const page = () => {
	return (
		<section className="flex flex-col items-center w-full">
			<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
				Shopping Cart
			</h1>
			<div className="flex flex-col w-11/12 max-w-5xl gap-4 py-10 lg:flex-row font-karla text-green">
				<ShoppingCart />
				<OrderSummary />
			</div>
		</section>
	);
};

export default page;

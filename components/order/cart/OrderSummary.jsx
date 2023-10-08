import Link from 'next/link';

const OrderSummary = ({ total }) => {
	const deliveryFee = 2.99;

	return (
		<div className="flex flex-col w-full lg:w-1/3">
			<h3 className="text-xl">Order Summary</h3>
			<div className="flex flex-col gap-5 pt-2">
				<div className="flex flex-col gap-2">
					<p>Subtotal: ${total}</p>
					<p>+ Delivery fees: ${deliveryFee}</p>
					<div className="w-full h-[1px] bg-green mb-1"></div>
					<p className="font-bold">
						= Total: ${total ? (total + deliveryFee).toFixed(2) : 0}
					</p>
				</div>
				<Link
					href="/order/checkout"
					className="px-4 py-3 font-bold text-center transition-colors border-4 rounded-full cursor-pointer hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
				>
					Go to checkout
				</Link>
			</div>
		</div>
	);
};

export default OrderSummary;

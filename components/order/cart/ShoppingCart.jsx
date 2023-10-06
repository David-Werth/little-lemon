import CartItem from './CartItem';
import CartItemSkeleton from './CartItemSkeleton';

const ShoppingCart = ({ menuItems, isLoading }) => {
	return (
		<div className="w-full h-full min-h-full lg:pr-6 lg:w-2/3 lg:border-r border-green font-karla">
			<div className="grid grid-cols-4 gap-3 text-xl">
				<h3 className="col-span-2 ">Product</h3>
				<h3>Quantity</h3>
				<h3>Total</h3>
			</div>
			<div className="grid gap-2 pt-2 auto-rows-fr">
				{isLoading ? (
					<>
						<CartItemSkeleton />
						<CartItemSkeleton />
						<CartItemSkeleton />
						<CartItemSkeleton />
						<CartItemSkeleton />
					</>
				) : (
					menuItems.map((i) => {
						return (
							<CartItem
								key={i._id}
								itemId={i._id}
								title={i.title}
								price={i.price}
								img={i.img}
							/>
						);
					})
				)}
			</div>
		</div>
	);
};

export default ShoppingCart;

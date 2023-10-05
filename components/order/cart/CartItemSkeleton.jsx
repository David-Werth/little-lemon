const CartItemSkeleton = () => {
	return (
		<div className="grid grid-cols-4 gap-3 bg-gray-100 select-none rounded-md min-h-[96.3px] animate-pulse overflow-hidden ">
			<div className="flex items-center col-span-2 gap-2">
				<div className="object-cover w-16 h-full bg-gray-200" />
				<div className="w-24 h-6 bg-gray-200 rounded-lg " />
			</div>
			<div className="self-center w-24 h-6 bg-gray-200 rounded-lg" />
			<div className="self-center w-24 h-6 bg-gray-200 rounded-lg" />
		</div>
	);
};

export default CartItemSkeleton;

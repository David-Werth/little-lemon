const MenuItemSkeleton = () => {
	return (
		<div className="overflow-hidden bg-gray-100 rounded-2xl [&>div>img]:hover:scale-110 flex select-none h-52 animate-pulse">
			<div className="flex flex-col justify-between w-2/3 gap-3 p-4 text-gray-300 font-karla">
				<div className="flex items-center justify-between text-lg font-bold">
					<h4 className="bg-gray-300">Item Titel</h4>
					<span className="text-base bg-gray-300">$999</span>
				</div>
				<p className="bg-gray-300">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
					assumenda.
				</p>
				<span className="font-bold bg-gray-300 w-fit">
					<p className="inline cursor-pointer">Add to cart xxx</p>
				</span>
			</div>
			<div className="flex-1 overflow-hidden bg-gray-300"></div>
		</div>
	);
};

export default MenuItemSkeleton;

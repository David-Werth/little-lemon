const MenuItemSkeleton = () => {
	return (
		<div className="overflow-hidden bg-gray-100 rounded-2xl flex select-none min-h-[241.61px] animate-pulse">
			<div className="flex flex-col justify-between w-2/3 gap-3 p-4">
				<div className="flex items-center justify-between ">
					<div className="self-center w-24 h-6 bg-gray-200 rounded-lg" />
					<div className="self-center w-12 h-6 bg-gray-200 rounded-lg" />
				</div>
				<div className="w-32 h-6 bg-gray-200 rounded-lg " />
				<div className="w-40 h-6 bg-gray-200 rounded-lg " />
				<div className="h-6 bg-gray-200 rounded-lg w-28 " />
			</div>
			<div className="flex-1 bg-gray-200" />
		</div>
	);
};

export default MenuItemSkeleton;

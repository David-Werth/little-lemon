const CardItemSkeleton = () => {
	return (
		<div className="grid grid-cols-4 gap-3 overflow-hidden font-bold bg-gray-100 select-none rounded-2xl text-gray-300 font-karla min-h-[80px] animate-pulse">
			<div className="flex items-center col-span-2 gap-2">
				<div className="flex-none object-cover w-16 h-full bg-gray-300"></div>
				<h4 className="bg-gray-300">Item Title Skeleton</h4>
			</div>
			<div className="flex items-center gap-2 md:gap-7">
				<p className="bg-gray-300">Item Count</p>
			</div>
			<p className="self-center w-20 text-base bg-gray-300">$999</p>
		</div>
	);
};

export default CardItemSkeleton;

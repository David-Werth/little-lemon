import MenuItemSkeleton from '@/components/order/MenuItemSkeleton';
import MenuNav from '@/components/order/MenuNav';

const loading = () => {
	return (
		<section className="flex flex-col items-center w-full">
			<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
				Discover our menu
			</h1>
			<div className="w-11/12 max-w-5xl">
				<MenuNav />
				<div className="py-12" id="starters">
					<h2 className="mb-4 text-4xl font-karla text-green">Starters</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						<MenuItemSkeleton />
						<MenuItemSkeleton />
						<MenuItemSkeleton />
						<MenuItemSkeleton />
					</div>
				</div>
				<div className="py-12" id="mains">
					<h2 className="mb-4 text-4xl font-karla text-green">Mains</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						<MenuItemSkeleton />
						<MenuItemSkeleton />
						<MenuItemSkeleton />
						<MenuItemSkeleton />
					</div>
				</div>
				<div className="py-12" id="desserts">
					<h2 className="mb-4 text-4xl font-karla text-green">Desserts</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						<MenuItemSkeleton />
						<MenuItemSkeleton />
						<MenuItemSkeleton />
						<MenuItemSkeleton />
					</div>
				</div>
				<div className="py-12" id="drinks">
					<h2 className="mb-4 text-4xl font-karla text-green">Drinks</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-7">
						<MenuItemSkeleton />
						<MenuItemSkeleton />
						<MenuItemSkeleton />
						<MenuItemSkeleton />
					</div>
				</div>
			</div>
		</section>
	);
};

export default loading;

export const metadata = {
	title: 'Little Lemon | Order Successful',
	description: 'Authentic Italian Restaurant',
};

const page = () => {
	return (
		<section className="flex flex-col items-center w-full h-[50vh]">
			<div className="flex flex-col items-center justify-center w-11/12 h-full max-w-5xl gap-10 py-10 text-center font-markazi text-green">
				<h1 className="font-bold text-7xl">Thank you for your order! 🎉</h1>
				<h2 className="text-xl font-karla">
					We will notify you once the driver is close!
				</h2>
			</div>
		</section>
	);
};

export default page;

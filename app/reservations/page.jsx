import BookingForm from '@/components/BookingForm';

const Page = () => {
	return (
		<section className="flex justify-center">
			<div className="flex flex-col items-center w-full ">
				<h1 className="w-full py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
					Table reservation
				</h1>
				<BookingForm />
			</div>
		</section>
	);
};

export default Page;

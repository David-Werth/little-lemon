import Image from 'next/image';
import customer1 from '../public/customer1.jpg';

const TestimonialCard = () => {
	return (
		<div className="p-4 bg-white rounded-2xl font-karla text-green">
			<div className="flex flex-col items-center mb-4">
				<Image src={customer1} alt="customer" className="w-32 rounded-full" />
				<h4 className="text-lg font-bold ">Customer Name</h4>
			</div>
			<div></div>
			<p>
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua."
			</p>
		</div>
	);
};

export default TestimonialCard;

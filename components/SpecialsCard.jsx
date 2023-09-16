import Image from 'next/image';

import greekSalad from '../public/greeksalad.jpg';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const SpecialsCard = () => {
	return (
		<div className="overflow-hidden bg-gray-100 rounded-2xl [&>div>img]:hover:scale-110">
			<div className="overflow-hidden">
				<Image
					src={greekSalad}
					alt="Greek Salad"
					className="object-cover w-full transition-all h-52 "
				/>
			</div>
			<div className=" p-4 flex flex-col justify-between text-green font-karla min-h-[15rem]">
				<div className="flex items-center justify-between text-lg font-bold">
					<h4>Greek Salad</h4>
					<span className="text-base text-orange-500">$12.99</span>
				</div>

				<p>
					The famous greek salad of crispy lettuce, peppers, olives and our Chicago
					style feta cheese, garnished with crunchy garlic and rosemary croutons.
				</p>
				<Link href="/order" className="font-bold">
					Order for delivery
					<FontAwesomeIcon icon={faMotorcycle} className="inline h-4 ml-4" />
				</Link>
			</div>
		</div>
	);
};

export default SpecialsCard;

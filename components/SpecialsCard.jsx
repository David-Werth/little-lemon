import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const SpecialsCard = ({ img, title, price, description }) => {
	return (
		<div className="overflow-hidden bg-gray-100 rounded-2xl [&>div>img]:hover:scale-110">
			<div className="overflow-hidden">
				<Image
					src={img}
					alt={title}
					className="object-cover w-full transition-all h-52 "
				/>
			</div>
			<div className=" p-4 flex flex-col justify-between text-green font-karla min-h-[15rem]">
				<div className="flex items-center justify-between text-lg font-bold">
					<h4>{title}</h4>
					<span className="text-base text-orange-500">{price}</span>
				</div>

				<p>{description}</p>
				<Link href="/order" className="font-bold">
					Order for delivery
					<FontAwesomeIcon icon={faMotorcycle} className="inline h-4 ml-4" />
				</Link>
			</div>
		</div>
	);
};

export default SpecialsCard;

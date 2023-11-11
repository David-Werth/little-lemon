import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const TestimonialCard = ({ img, name, data }) => {
	return (
		<div className="p-4 bg-white rounded-2xl font-karla text-green">
			<div className="flex flex-col items-center mb-3">
				<Image
					quality={50}
					src={img}
					alt="customer"
					className="object-cover w-32 h-32 rounded-full"
				/>
				<h4 className="text-lg font-bold ">{name}</h4>
			</div>
			<div className="flex text-yellow mb-1">
				<FontAwesomeIcon className="h-4" icon={faStar} />
				<FontAwesomeIcon className="h-4" icon={faStar} />
				<FontAwesomeIcon className="h-4" icon={faStar} />
				<FontAwesomeIcon className="h-4" icon={faStar} />
				<FontAwesomeIcon className="h-4" icon={faStar} />
			</div>
			<p>
				{data}
			</p>
		</div>
	);
};

export default TestimonialCard;

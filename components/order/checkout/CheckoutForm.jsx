import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import {
	faCreditCard,
	faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CheckoutForm = () => {
	return (
		<form className="flex flex-col w-full gap-4 lg:w-2/3 ">
			<div className="flex flex-col gap-1">
				<label htmlFor="name">Full Name</label>
				<input
					type="text"
					name="name"
					id="name"
					placeholder="John Doe"
					className="p-4 font-bold border rounded-md border-green"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="street">Street & Number</label>
				<input
					type="text"
					name="street"
					id="street"
					placeholder="Main Street 10"
					className="p-4 font-bold border rounded-md border-green"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="additional">Floor / Door</label>
				<input
					type="text"
					name="additional"
					id="additional"
					placeholder="Floor 1, Door 11"
					className="p-4 font-bold border rounded-md border-green"
				/>
			</div>
			<div className="flex flex-col gap-1">
				<label htmlFor="city">City</label>
				<input
					type="text"
					name="city"
					id="city"
					placeholder="Anytown"
					className="p-4 font-bold border rounded-md border-green"
				/>
			</div>
			<div>
				<h3>Payment Method:</h3>
				<div className="flex gap-4 mt-2">
					<div className="flex flex-col items-center justify-center px-5 py-2 transition-colors border rounded-md cursor-pointer w-28 hover:bg-green hover:text-white border-green text-green">
						<FontAwesomeIcon icon={faMoneyBillWave} className="h-12" />
						<p>Cash</p>
					</div>
					<div className="flex flex-col items-center justify-center px-5 py-2 text-gray-500 transition-colors bg-gray-300 border border-gray-400 rounded-md cursor-not-allowed w-28">
						<FontAwesomeIcon icon={faCreditCard} className="h-12" />
						<p>Card</p>
					</div>
					<div className="flex flex-col items-center justify-center px-5 py-2 text-gray-500 transition-colors bg-gray-300 border border-gray-400 rounded-md cursor-not-allowed w-28">
						<FontAwesomeIcon icon={faPaypal} className="h-12" />
						<p>PayPal</p>
					</div>
				</div>
				<span className="text-red-600">
					*Sorry, at the moment we only offer cash on delivery!
				</span>
			</div>
		</form>
	);
};

export default CheckoutForm;

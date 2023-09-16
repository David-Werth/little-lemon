import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faLocationDot,
	faPhone,
	fas,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../public/logowhite.png';
import Image from 'next/image';
import Link from 'next/link';
import {
	faFacebook,
	faInstagram,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';

let something =
	'grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

const Footer = () => {
	return (
		<footer className="flex justify-center w-full py-8 mt-auto text-white bg-green font-karla">
			<div className="grid w-11/12 max-w-5xl gap-10 sm:grid-cols-2 md:grid-cols-none md:grid-flow-col justify-items-stretch">
				<Image src={logo} alt="logo" className="w-24" />
				<nav>
					<h4 className="mb-2 font-bold tracking-widest">SITEMAP</h4>
					<ul className="flex flex-col">
						<Link href="/">Home</Link>
						<Link href="/about">About</Link>
						<Link href="/menu">Menu</Link>
						<Link href="/reservations">Reservations</Link>
						<Link href="/order">Order online</Link>
						<Link href="/login">Login</Link>
					</ul>
				</nav>
				<div>
					<h4 className="mb-2 font-bold tracking-widest">CONTACT US</h4>

					<p className="italic">
						<FontAwesomeIcon icon={faLocationDot} className="inline h-4 mr-4" />
						678 Pisa Ave, Chicago, IL 60611
					</p>
					<p>
						<FontAwesomeIcon icon={faPhone} className="inline h-4 mr-4" />
						(312) 593-2744
					</p>
					<p>
						<FontAwesomeIcon icon={faEnvelope} className="inline h-4 mr-4" />
						customer@littlelemon.com
					</p>
				</div>
				<div>
					<h4 className="mb-2 font-bold tracking-widest">CONNECT WITH US</h4>

					<FontAwesomeIcon icon={faFacebook} className="inline h-5 mr-4" />
					<FontAwesomeIcon icon={faTwitter} className="inline h-5 mr-4" />
					<FontAwesomeIcon icon={faInstagram} className="inline h-5 mr-4" />
					<FontAwesomeIcon icon={faYoutube} className="inline h-5 mr-4" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;

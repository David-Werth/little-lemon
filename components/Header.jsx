import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/logo.png';

const Header = () => {
	return (
		<header className="flex justify-center h-24">
			<nav className="flex items-center justify-between w-11/12 max-w-5xl">
				<Link href="/">
					<Image src={logo} alt="logo" className="w-64" />
				</Link>
				<ul className="flex h-full text-base text-green font-karla ">
					<Link className="nav-link" href="/">
						HOME
					</Link>
					<Link className="nav-link" href="/about">
						ABOUT
					</Link>
					<Link className="nav-link" href="/menu">
						MENU
					</Link>
					<Link className="nav-link" href="/reservations">
						RESERVATIONS
					</Link>
					<Link className="nav-link" href="/order">
						ORDER ONLINE
					</Link>
					<Link className="nav-link" href="/login">
						LOGIN
					</Link>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

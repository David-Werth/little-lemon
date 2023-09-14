import Image from 'next/image';

import Link from 'next/link';

const Header = () => {
	return (
		<header className="h-24 flex justify-center">
			<nav className="w-11/12 max-w-5xl flex justify-between items-center">
				<Link href="/">
					<Image src="/logo.png" width={250} height={250} alt="logo" />
				</Link>
				<ul className="flex gap-8 text-base text-green">
					<li>
						<Link className="flex-1" href="/">
							HOME
						</Link>
					</li>
					<li>
						<Link href="/about">ABOUT</Link>
					</li>
					<li>
						<Link href="/menu">MENU</Link>
					</li>
					<li>
						<Link href="/reservations">RESERVATIONS</Link>
					</li>
					<li>
						<Link href="/order">ORDER ONLINE</Link>
					</li>
					<li>
						<Link href="/login">LOGIN</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;

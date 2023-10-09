'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import logo from '../../public/logo.png';
import { useContext, useEffect, useState } from 'react';
import { LocalStorageContext } from '@/context/LocalStorageContext';

const Navbar = () => {
	const [windowDimension, setWindowDimension] = useState(null);
	const [clicked, setClicked] = useState(false);
	const isMobile = windowDimension <= 1024;
	const [totalCartCount, setTotalCartCount] = useState(0);
	const { cartState } = useContext(LocalStorageContext);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setWindowDimension(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		if (!isMobile) {
			setClicked(false);
		}
	}, [isMobile]);

	const handleClick = () => {
		setClicked(() => !clicked);
	};

	useEffect(() => {
		let counter = 0;
		cartState.map((i) => {
			counter = counter + i.itemCount;
		});

		setTotalCartCount(counter);
	}, [cartState]);

	return (
		<nav className="flex flex-row items-center justify-between w-11/12 max-w-5xl bg-white ">
			<Link href="/">
				<Image src={logo} alt="logo" className="w-64 my-2 lg:inline" />
			</Link>
			<FontAwesomeIcon
				icon={!clicked ? faBars : faX}
				onClick={handleClick}
				className="cursor-pointer h-7 lg:hidden text-green"
			/>
			<ul
				className={`${
					clicked && isMobile ? 'right-0' : '-right-[60%]'
				} absolute min-w-[50%] transition-[right] lg:transition-none lg:w-auto top-[86.14px] lg:top-0 lg:relative lg:right-0 lg:flex flex-col lg:flex-row h-screen lg:h-full text-base bg-white  text-green font-karla justify-end`}
			>
				<Link onClick={() => setClicked(false)} className="nav-link" href="/">
					HOME
				</Link>
				<Link onClick={() => setClicked(false)} className="nav-link" href="/order">
					ORDER ONLINE
				</Link>
				<Link
					onClick={() => setClicked(false)}
					className="nav-link"
					href="/reservations"
				>
					RESERVATIONS
				</Link>
				<Link
					onClick={() => setClicked(false)}
					className="relative nav-link"
					href="/order/cart"
				>
					<p className="absolute w-[20px] right-[30px] text-center rounded-full bg-yellow top-[14px] lg:right-[10px] lg:top-[17px] text-sm">
						{totalCartCount}
					</p>
					<FontAwesomeIcon icon={faCartShopping} className={`h-7`} />
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;

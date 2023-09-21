'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

import logo from '../public/logo.png';
import { useEffect, useState } from 'react';

const Navbar = () => {
	const [windowDimension, setWindowDimension] = useState(null);
	const [clicked, setClicked] = useState(false);
	const isMobile = windowDimension <= 1024;

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

	const handleClick = () => {
		setClicked(() => !clicked);
	};

	useEffect(() => {
		if (!isMobile) {
			setClicked(false);
		}
	}, [isMobile]);

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
				} absolute min-w-[50%] transition-[right] lg:transition-none lg:w-auto top-[86.14px] lg:top-0 lg:relative lg:right-0 lg:flex flex-col lg:flex-row h-screen lg:h-full text-base bg-white  text-green font-karla`}
			>
				<Link onClick={() => setClicked(false)} className="nav-link" href="/">
					HOME
				</Link>
				<Link onClick={() => setClicked(false)} className="nav-link" href="/about">
					ABOUT
				</Link>
				<Link onClick={() => setClicked(false)} className="nav-link" href="/menu">
					MENU
				</Link>
				<Link
					onClick={() => setClicked(false)}
					className="nav-link"
					href="/reservations"
				>
					RESERVATIONS
				</Link>
				<Link onClick={() => setClicked(false)} className="nav-link" href="/order">
					ORDER ONLINE
				</Link>
				<Link onClick={() => setClicked(false)} className="nav-link" href="login">
					LOGIN
				</Link>
			</ul>
		</nav>
	);
};

export default Navbar;

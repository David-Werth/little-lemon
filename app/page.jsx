import Image from 'next/image';
import Link from 'next/link';

import hero from '../public/hero.jpg';

export default function Home() {
	return (
		<section className="flex justify-center pt-10 text-white bg-green">
			<div className="flex flex-col w-11/12 max-w-5xl gap-10 md:flex-row">
				<div className="flex-1">
					<h1 className="text-6xl font-normal text-yellow font-markazi">
						Little Lemon
					</h1>
					<h2 className="text-5xl font-markazi mb-7">Chicago</h2>
					<p className="mb-10 font-karla">
						We are a family owned Mediterranean restaurant, focused on traditional
						recipes served with a modern twist.
					</p>

					<Link
						href="/reservations"
						className="px-4 py-3 font-bold transition-colors border-4 rounded-full hover:bg-transparent hover:text-white border-yellow bg-yellow text-green font-karla"
					>
						Reserve a table
					</Link>
				</div>
				<Image
					className="self-center object-cover w-full -mb-16 h-96 rounded-2xl md:flex-1"
					src={hero}
					alt="bruscetta"
				/>
			</div>
		</section>
	);
}

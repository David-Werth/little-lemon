import Image from 'next/image';
import Link from 'next/link';

import hero from '../public/hero.jpg';
import chefs from '../public/chefs.jpg';
import chefs2 from '../public/chefs2.jpg';

import SpecialsCard from '@/components/SpecialsCard';
import TestimonialCard from '@/components/TestimonialCard';

export default function Home() {
	return (
		<>
			<section className="flex justify-center pt-10 text-white bg-green">
				<div className="flex flex-col w-11/12 max-w-5xl gap-10 md:flex-row">
					<div className="flex-1">
						<h1 className="text-6xl font-normal text-yellow font-markazi">
							Little Lemon
						</h1>
						<h2 className="text-4xl font-markazi mb-7">Chicago</h2>
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
						width={500}
						height={500}
						src={hero}
						alt="bruschtta"
					/>
				</div>
			</section>
			<section className="flex justify-center pb-8 pt-28 text-green">
				<div className="w-11/12 max-w-5xl">
					<div className="flex items-center justify-between mb-14">
						<h3 className="text-4xl font-markazi">This weeks specials!</h3>
						<Link
							href="/menu"
							className="px-4 py-3 font-bold transition-colors border-4 rounded-full hover:bg-green hover:border-green hover:text-white border-yellow bg-yellow text-green font-karla"
						>
							Online Menu
						</Link>
					</div>
					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
						<SpecialsCard />
						<SpecialsCard />
						<SpecialsCard />
					</div>
				</div>
			</section>
			<section className="flex justify-center py-10 text-white bg-green">
				<div className="w-11/12 max-w-5xl">
					<h3 className="mb-10 text-4xl font-markazi">What people say about us!</h3>
					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
						<TestimonialCard />
					</div>
				</div>
			</section>
			<section className="flex justify-center py-10">
				<div className="grid w-11/12 max-w-5xl grid-cols-1 gap-10 lg:grid-cols-2">
					<div>
						<h1 className="text-6xl font-normal text-yellow font-markazi">
							Little Lemon
						</h1>
						<h2 className="text-4xl font-markazi mb-7 text-green">Chicago</h2>
						<p className="mb-10 font-karla text-green">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
							veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
							commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
							velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
							occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus
							error sit voluptatem accusantium doloremque laudantium, totam rem
							aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
							beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
							voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
							dolores eos qui ratione voluptatem sequi nesciunt.
						</p>
					</div>
					<div className="flex flex-col gap-5 sm:flex-row lg:flex-col ">
						<Image
							src={chefs}
							alt="chefs"
							className="object-cover w-full sm:w-[48%] lg:w-full rounded-2xl"
						/>
						<Image
							src={chefs2}
							alt="chefs"
							className="object-cover w-full sm:w-[48%] lg:w-full rounded-2xl"
						/>
					</div>
				</div>
			</section>
		</>
	);
}

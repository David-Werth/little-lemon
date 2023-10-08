import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ScrollToTop from '@/components/shared/ScrollToTop';

import './globals.css';

import { Karla } from 'next/font/google';
import { Markazi_Text } from 'next/font/google';
import { LocalStorageWrapper } from '@/context/LocalStorageContext';
import { TotalCartValueWrapper } from '@/context/TotalCartValueContext';

const karla = Karla({ variable: '--font-karla', subsets: ['latin'] });
const markazi = Markazi_Text({
	variable: '--font-markazi',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Little Lemon',
	description: 'Authentic Italian Restaurant',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full">
			<body
				className={`${karla.variable} ${markazi.variable} flex flex-col justify-between h-full`}
			>
				<LocalStorageWrapper>
					<TotalCartValueWrapper>
						<Header />
						<main className="app top-[86.14px] relative z-0 mb-[86.14px]">
							{children}
							<ScrollToTop />
						</main>
						<Footer />
					</TotalCartValueWrapper>
				</LocalStorageWrapper>
			</body>
		</html>
	);
}

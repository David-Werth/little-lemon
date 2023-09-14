import Header from '@/components/Header';
import './globals.css';

import Footer from '@/components/Footer';

export const metadata = {
	title: 'Little Lemon',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="font-karla">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

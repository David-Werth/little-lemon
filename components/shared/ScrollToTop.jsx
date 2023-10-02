'use client';

import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

function scrollToTop() {
	if (!isBrowser()) return;
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTop = () => {
	return (
		<div className="fixed z-50 cursor-pointer md:bottom-12 md:right-12 bottom-4 right-4 just">
			<FontAwesomeIcon
				icon={faArrowCircleUp}
				onClick={scrollToTop}
				className="h-12 border-2 rounded-full bg-yellow text-green"
			/>
		</div>
	);
};

export default ScrollToTop;

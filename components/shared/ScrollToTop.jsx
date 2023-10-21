'use client';

import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const isBrowser = () => typeof window !== 'undefined';

function scrollToTop() {
	if (!isBrowser()) return;
	window.scrollTo({ top: 0, behavior: 'smooth' });
}

const ScrollToTop = () => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		if (!isBrowser()) return;
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) {
				setShowBtn(true);
			} else {
				setShowBtn(false);
			}
		});
	}, []);

	return (
		<div className="fixed z-50 cursor-pointer bottom-4 right-4">
			<FontAwesomeIcon
				icon={faArrowCircleUp}
				onClick={scrollToTop}
				className={`h-12 border-2 rounded-full bg-yellow text-green ${
					showBtn ? 'opacity-100' : 'opacity-0'
				} transition-opacity`}
			/>
		</div>
	);
};

export default ScrollToTop;

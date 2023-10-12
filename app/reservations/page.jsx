'use client';

import BookingConfirmation from '@/components/reservation/BookingConfirmation';
import BookingForm from '@/components/reservation/BookingForm';
import { useState } from 'react';

const Page = () => {
	const [formData, setFormData] = useState(undefined);
	const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

	return (
		<section className="flex justify-center w-full">
			<div className="flex flex-col items-center w-full ">
				<h1 className="w-full px-4 py-6 text-6xl font-normal text-center text-white font-markazi bg-green">
					Table reservation
				</h1>
				{!hasBeenSubmitted ? (
					<BookingForm
						setFormData={setFormData}
						setHasBeenSubmitted={setHasBeenSubmitted}
					/>
				) : (
					<BookingConfirmation formData={formData} />
				)}
			</div>
		</section>
	);
};

export default Page;

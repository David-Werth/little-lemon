import { render, screen } from '@testing-library/react';
import BookingForm from '../components/reservation/BookingForm';

describe('Booking Form - Rendering', () => {
	it('should have submit button', () => {
		render(
			<BookingForm
				availableTimes={['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']}
			/>
		);

		expect(screen.getByRole('button')).toBeInTheDocument();
	});
});

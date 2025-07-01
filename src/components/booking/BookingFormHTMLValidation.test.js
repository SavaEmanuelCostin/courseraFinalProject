import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm HTML5 validation', () => {
  const props = {
    availableTimes: ['17:00', '18:00'],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };

  test('date input has type and required attributes', () => {
    render(<BookingForm {...props} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toBeRequired();
  });

  test('time select is required', () => {
    render(<BookingForm {...props} />);
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test('guests input has min and max attributes', () => {
    render(<BookingForm {...props} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('type', 'number');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('occasion select is required', () => {
    render(<BookingForm {...props} />);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });
});

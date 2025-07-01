
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm JS validation', () => {
  const props = {
    availableTimes: ['17:00', '18:00'],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };

  test('shows validation messages on invalid submission', () => {
    render(<BookingForm {...props} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    const dateInput = screen.getByLabelText(/choose date/i);
    fireEvent.focus(dateInput);
    fireEvent.blur(dateInput);

    const timeSelect = screen.getByLabelText(/choose time/i);
    fireEvent.focus(timeSelect);
    fireEvent.blur(timeSelect);

    const occasionSelect = screen.getByLabelText(/occasion/i);
    fireEvent.focus(occasionSelect);
    fireEvent.blur(occasionSelect);

    fireEvent.click(submitButton);

    expect(props.submitForm).not.toHaveBeenCalled();
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {
    render(<BookingForm {...props} />);
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: '2025-06-25' },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: '17:00' },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: '3' },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: 'Birthday' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(props.submitForm).toHaveBeenCalledWith({
      date: '2025-06-25',
      time: '17:00',
      guests: 3,
      occasion: 'Birthday',
    });

  });
});

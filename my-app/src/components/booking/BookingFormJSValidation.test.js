import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm JS validation', () => {
  const defaultProps = {
    availableTimes: ['17:00', '18:00'],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };

  test('does not submit with empty fields and shows validation errors after touch', () => {
    render(<BookingForm {...defaultProps} />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Declanșează "touched" pe toate câmpurile
    fireEvent.focus(screen.getByLabelText(/choose date/i));
    fireEvent.blur(screen.getByLabelText(/choose date/i));

    fireEvent.focus(screen.getByLabelText(/choose time/i));
    fireEvent.blur(screen.getByLabelText(/choose time/i));

    fireEvent.focus(screen.getByLabelText(/occasion/i));
    fireEvent.blur(screen.getByLabelText(/occasion/i));

    fireEvent.click(submitButton);

    expect(defaultProps.submitForm).not.toHaveBeenCalled();

    // Acum putem verifica mesajele
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });
});

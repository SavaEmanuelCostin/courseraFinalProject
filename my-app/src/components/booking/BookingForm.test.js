import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

describe('BookingForm HTML5 validation', () => {
  const defaultProps = {
    availableTimes: ['17:00', '18:00'],
    dispatch: jest.fn(),
    submitForm: jest.fn(),
  };

  test('renders date input with correct attributes', () => {
    render(<BookingForm {...defaultProps} />);
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('type', 'date');
  });

  test('renders guests input with min and max attributes', () => {
    render(<BookingForm {...defaultProps} />);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('renders select time with default option', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByText('-- Select a time --')).toBeInTheDocument();
  });

  test('renders occasion select with options', () => {
    render(<BookingForm {...defaultProps} />);
    expect(screen.getByText('Birthday')).toBeInTheDocument();
    expect(screen.getByText('Anniversary')).toBeInTheDocument();
  });
});
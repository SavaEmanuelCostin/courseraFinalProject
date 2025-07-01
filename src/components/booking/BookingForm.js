import { useState } from 'react';

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false,
    occasion: false,
  });

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isDateValid = date !== '';
  const isTimeValid = time !== '';
  const isGuestsValid = guests >= 1 && guests <= 10;
  const isOccasionValid = occasion !== '';
  const isFormValid = isDateValid && isTimeValid && isGuestsValid && isOccasionValid;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setTouched({
        date: true,
        time: true,
        guests: true,
        occasion: true,
      });
      return;
    }

    const formData = { date, time, guests, occasion };
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);
    dispatch({ type: 'update_times', date: selectedDate });
  };

  return (
    <div className="booking-form-main-wrapper small-container">
      <h1>Book Now</h1>
      <form className="booking-form" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            required
            value={date}
            onChange={handleDateChange}
            onBlur={() => handleBlur('date')}
            className={!isDateValid && touched.date ? 'invalid-input' : ''}
          />
          {!isDateValid && touched.date && (
            <div className="error-message">Date is required</div>
          )}
        </div>

        <div>
          <label htmlFor="res-time">Choose time</label>
          <select
            required
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            onBlur={() => handleBlur('time')}
            className={!isTimeValid && touched.time ? 'invalid-input' : ''}
          >
            <option value="">-- Select a time --</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {!isTimeValid && touched.time && (
            <div className="error-message">Time is required</div>
          )}
        </div>

        <div>
          <label htmlFor="guests">Number of guests</label>
          <input
            required
            type="number"
            id="guests"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            onBlur={() => handleBlur('guests')}
            className={!isGuestsValid && touched.guests ? 'invalid-input' : ''}
          />
          {!isGuestsValid && touched.guests && (
            <div className="error-message">Guests must be between 1 and 10</div>
          )}
        </div>

        <div>
          <label htmlFor="occasion">Occasion</label>
          <select
            required
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            onBlur={() => handleBlur('occasion')}
            className={!isOccasionValid && touched.occasion ? 'invalid-input' : ''}
          >
            <option value="">-- Select occasion --</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {!isOccasionValid && touched.occasion && (
            <div className="error-message">Occasion is required</div>
          )}
        </div>

        <button
          className="button button-default"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

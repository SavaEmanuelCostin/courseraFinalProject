
import React, { useState } from 'react';

const BookingForm = ({availableTimes, dispatch, submitForm  }) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch({ type: 'update_times', date: selectedDate });
    };

    return (
        <div className='booking-form-main-wrapper small-container'>
        <h1>Book Now</h1>
        <form className='booking-form'
        onSubmit={handleSubmit}
        >
            <div>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
            />
            </div><div>
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                <option value="">-- Select a time --</option>
                {availableTimes.map((t) => (
                <option key={t} value={t}>
                    {t}
                </option>
                ))}
            </select>
            </div><div>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
            />
            </div><div>
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option value="">-- Select occasion --</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            </div>
            <button className='button button-default' type="submit" value="Make Your Reservation">Submit</button>
        </form>
        </div>
    );
};

export default BookingForm;
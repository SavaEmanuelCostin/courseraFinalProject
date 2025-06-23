
import React, { useReducer  } from 'react';
import BookingForm from "./BookingForm";

const BookingPage = () => {
    // const [availableTimes, setAvailableTimes] = useState([
    //     '17:00',
    //     '18:00',
    //     '19:00',
    //     '20:00',
    //     '21:00',
    //     '22:00',
    // ]);
    const updateTimes = (state, action) => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    };
    const initializeTimes = () => {
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    )
}

export default BookingPage;
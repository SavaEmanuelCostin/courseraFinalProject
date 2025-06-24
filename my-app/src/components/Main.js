import Homepage from "./homepage/Homepage";
import BookingPage from "./booking/BookingPage";
import ConfirmedBooking from "./booking/ConfirmedBooking";
import { Routes, Route } from "react-router-dom";
import React, { useReducer } from "react";
import { initializeTimes, updateTimes } from './bookingUtils';
import { submitAPI } from "../api/api";

import { useNavigate } from "react-router-dom";

const Main = () => {

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate("/booking-confirmed", { state: formData });
    }
  };

  return (
    <main>
        <div className="container">
              <Routes> 
                <Route path="/" element={<Homepage/>}></Route>
                <Route
                  path="/booking"
                  element={
                    <BookingPage
                      availableTimes={availableTimes}
                      dispatch={dispatch}
                      submitForm={submitForm}
                    />
                  }
                />
                <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
              </Routes>
        </div>
    </main>
  );
};
export default Main;
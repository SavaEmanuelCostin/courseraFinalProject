import Homepage from "./homepage/Homepage";
import BookingPage from "./BookingPage";
import { Routes, Route } from "react-router-dom";
const Main = () => {

  return (
    <main>
        <div className="container">
              <Routes> 
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/booking" element={<BookingPage />}></Route>
              </Routes>
        </div>
    </main>
  );
};
export default Main;
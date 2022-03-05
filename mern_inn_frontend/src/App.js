import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInSide from "./components/SignInSide";
import AboutUs from "./pages/AboutUs";
import ourservices from "./pages/OurServices";
import portfolio from "./pages/portfolio";
import SignUp from "./components/signup";
import booking from "./pages/book";
import PreviousBookings from "./pages/PreviousBookings";
import bookingContext from "./context/bookings/BookingContext";
import Alert from "./components/Alerts";

function App() {
  
  const [bookings, setBookings] = useState([]);
  const [alert, setAlert] = useState(null)
  const host = 'http://localhost:5000';
  const showAlert = (message, type) => {
    setAlert({
      type:  type ,
      message: message
    }
    )
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  async function getBookingHistory() {
    await fetch(`${host}/api/bookings/fetchallbookings`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    }).then((response) => {
      return response.json();
    }
    ).then((data) => {
      setBookings(data)
    });
  }
  return (
    <>
      <bookingContext.Provider value={{ bookings, setBookings, getBookingHistory, showAlert }}>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/facilities" component={ourservices} />
            <Route exact path="/developer" component={portfolio} />
            <Route exact path="/login" component={SignInSide} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/booking" component={booking} />
            <Route exact path="/booking-history" component={PreviousBookings} />
          </Switch>
        </Router>
      </bookingContext.Provider>
    </>
  );
}

export default App;
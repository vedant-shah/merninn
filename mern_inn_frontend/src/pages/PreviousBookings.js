import React, { useContext, useEffect } from 'react'
import PreviousBookingItem from '../components/PreviousBookingItem'
import bookingContext from '../context/bookings/BookingContext';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from "react-router-dom";

const PreviousBookings = () => {
    const bookingArray = useContext(bookingContext);
    const { bookings, getBookingHistory, showAlert } = bookingArray;
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('token'))
            getBookingHistory();
        else {
            history.push('/login');
            showAlert("Login to Continue", "danger")
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <div className="container mx-auto my-3">
                <div className="h2 mx-auto">Welcome to MERN Inn!</div>
                <div className="h5 mx-auto" style={{ fontWeight: 'bold' }}>Your Previous Booking Details:</div>
                <Link to="/booking" className='mx-auto' >
                    <button className='btn btn-outline-success '>Book a Holiday with us Now!</button>
                </Link>
                <hr />
                <Grid container spacing={1} className="mx-auto">
                    {bookings.map((booking) => {
                        return (<Grid item xs={12} md={4} lg={4} key={booking._id} >
                            <PreviousBookingItem bookingData={booking} />
                        </Grid>)
                    })}
                </Grid>
            </div>
        </>
    )
}

export default PreviousBookings
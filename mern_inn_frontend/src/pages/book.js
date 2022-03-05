import React, { useState, useContext, useEffect } from 'react'
import Button from '@mui/material/Button';
import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Bill from '../components/Bill';
import { useHistory } from 'react-router-dom'
import bookingContext from '../context/bookings/BookingContext';


function Book() {

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push('/login');
            showAlert("Login to Continue", "danger")
        }
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    const bookingContexts = useContext(bookingContext);
    const { showAlert } = bookingContexts;
    let history = useHistory();
    const host = 'http://localhost:5000';
    const [c, setC] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [room, setRoom] = useState('');
    const [checkin, setcheckin] = useState(new Date());
    const [checkout, setcheckout] = useState(new Date());
    const [days, setDays] = useState(1);
    const [destination, setDestination] = useState('Goa');
    const [total, setTotal] = useState(0);
    const [drpVal, setDrpVal] = useState((checkin).toString().substring(3, 15) + ' - ' + checkout.toString().substring(3, 15));
    const location = [
        {
            value: 'Goa',
            label: 'Goa',
        },
        {
            value: 'Maldives',
            label: 'Maldives',
        },
        {
            value: 'Bali',
            label: 'Bali',
        },
        {
            value: 'Greece',
            label: 'Greece',
        },
    ];
    let bookingData = {
        name: name,
        email: email,
        phone: phone,
        rooms: room,
        checkin: checkin,
        checkout: checkout,
        days: days,
        location: destination,
        total: total
    }
    const [isError, setIsError] = useState(true)
    const [isNameError, setIsNameError] = useState(true);
    const [isEmailError, setIsEmailError] = useState(true);
    const [isPhoneError, setIsPhoneError] = useState(true);
    const [isRoomError, setIsRoomError] = useState(true);
    const [phoneErrorMessage, setPhoneErrorMessage] = useState('Phone is Required');
    const [roomErrorMessage, setRoomErrorMessage] = useState('Rooms is Required');
    const [emailErrorMessage, setEmailErrorMessage] = useState('Email is Required');
    const bbtn = <>
        <Button variant="outlined" id='nextcnfbtn' className='mx-auto' style={{ "width": "30%" }}
            onClick={(c) => {
                setC(0);
            }}
        >Back</Button>
    </>
    const minDate = new Date();
    const updateDate = async (args) => {
        if (args.value === null) {
            setIsError(true);
        }
        else {
            setIsError(false);
            setDrpVal(args.value);
            setcheckin(args.startDate);
            setcheckout(args.endDate);
            setDays(args.daySpan-1);
            setTotal(bookingData.rooms * 1000 * args.daySpan)

        }
    };

    const isNameValid = (e) => {
        if (e === '') {
            setIsNameError(true);
            setIsError(true);
        }
        else {
            setIsNameError(false);
            setIsError(false);
        }
    }
    const isEmailValid = (e) => {
        if (e === '') {
            setIsError(true);
            setIsEmailError(true);
            setEmailErrorMessage("Email is Required")
        }
        else if (e.match(/.+@.+\..+/)) {
            setIsEmailError(false);
            setIsError(false);

        }
        else {
            setEmailErrorMessage("Invalid email")
            setIsEmailError(true);
            setIsError(true);
        }

    }
    const isPhoneValid = (e) => {
        if (e === '') {
            setIsPhoneError(true);
            setPhoneErrorMessage("Phone is Required");
            setIsError(true);
        }
        else if (parseInt(e, 10) < 7000000000 || parseInt(e, 10) > 9999999999) {
            setIsPhoneError(true);
            setPhoneErrorMessage("Invalid Phone Number");
            setIsError(true);
        }
        else {
            setIsPhoneError(false);
            setIsError(false);
        }
    }
    const isRoomValid = (e) => {
        if (e === '') {
            setIsRoomError(true)
            setRoomErrorMessage("Rooms is Required")
            setIsError(true);
        }
        else if (parseInt(e, 10) < 1) {
            setIsRoomError(true);
            setIsError(true);
            setRoomErrorMessage("Number of rooms cannot be negative")
        }
        else {
            setIsRoomError(false);
            setIsError(false);
        }
    }
    let url = `${host}/api/bookings/addbooking`
    async function postData() {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": localStorage.getItem('token')
            },

            body: JSON.stringify(bookingData)
        }).then(() => {
            console.log("Your Holiday has been successfully booked!");
            history.push('/booking-history');
            showAlert("Congratulations, your Holiday has been successfully booked!", "success")
        });
    }
    const bookingForm = <>
        <form className='d-flex flex-column' >
            {/* Name */}
            <TextField name="name" required className='my-2 mx-auto' label="Name" variant="outlined" style={{ "minWidth": "70%" }} value={name} error={isNameError} helperText={isNameError ? "Name is required" : ""} onChange={(event) => {
                setName(event.target.value);
                isNameValid(event.target.value);
            }}
            />

            <TextField name="email" required className='my-2 mx-auto' label="Email" variant="outlined" style={{ "minWidth": "70%" }} value={email} error={isEmailError} helperText={isEmailError ? emailErrorMessage : ""} onChange={(event) => {
                setEmail(event.target.value);
                isEmailValid(event.target.value);
            }}
            />


            <TextField name="phone" required className='my-2 mx-auto' label="Phone" variant="outlined" style={{ "minWidth": "70%" }} value={phone} error={isPhoneError} helperText={isPhoneError ? phoneErrorMessage : ""} onChange={(event) => {
                setPhone(event.target.value);
                isPhoneValid(event.target.value);

            }}
            />

            <TextField
                id="destination"
                select
                required
                label="Destination"
                value={destination}
                onChange={(event) => {
                    setDestination(event.target.value);
                }}
                className='my-4 mx-auto'
                style={{ "minWidth": "70%" }}
            >
                {location.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField name="rooms" className='mx-auto' required label="No. of Rooms" variant="outlined" style={{ "minWidth": "70%" }} value={room} error={isRoomError} helperText={isRoomError ? roomErrorMessage : ""} onChange={(event) => {
                setRoom(event.target.value)
                isRoomValid(event.target.value);
                setTotal(bookingData.rooms * 1000 * bookingData.days)
            }}
            />

            <div className='mx-auto my-4' style={{ "minWidth": "70%" }}>
                <DateRangePickerComponent

                    placeholder="Enter Check-In and Check-Out dates"

                    delayUpdate={true}

                    min={minDate}

                    minDays={1}

                    format="dd MMM yyyy"

                    change={updateDate}

                    value={drpVal}

                />
            </div>
        </form>
    </>
    function getCardContent(c) {
        switch (c) {
            case 0:
                return bookingForm;
            case 1:
                return <Bill bookingData={bookingData} setTotal={setTotal} />;
            default:
                return "Wrong input";
        }
    }
    return (
        <>
            <div className="card mx-auto d-flex mt-5 px-2 py-3 col-md-7 col-sm-12 col-xs-12" >

                <div className="h2 mx-auto">Book your Holiday with us!</div>
                <hr />
                <div className="h5 mx-auto" style={{ fontWeight: 'bold' }}>Booking Details:</div>
                {getCardContent(c)}
                <div className="d-flex flex-row">
                    {c === 1 ? bbtn : ''}
                    <Button variant="outlined" id='nextcnfbtn' className='mx-auto' style={{ "width": c === 1 ? "30%" : "60%" }} disabled={isError}
                        onClick={() => {
                            c === 1 ? postData() : setC(1);
                        }}
                    >{c === 1 ? "Book!" : "Next"}</Button>
                </div>
                <p className='mx-auto' style={{ color: "red", fontSize: "0.8rem" }}>{isError ? "One or more fields are invalid, kindly re-check" : ""}</p>
            </div>
        </>
    )
}

export default Book
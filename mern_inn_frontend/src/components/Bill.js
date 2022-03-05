import React from 'react'
function Bill(props) {

  return (
    <>
      <div className="d-flex flex-column justify-content-between flex-">
        <p className="d-inline-block h6">Name:</p>
        <p className="d-inline-block text-muted">{props.bookingData.name}</p>
        <p className="d-inline-block h6">Email:</p>
        <p className="d-inline-block text-muted">{props.bookingData.email}</p>
        <p className="d-inline-block h6">Phone:</p>
        <p className="d-inline-block text-muted">+91 {props.bookingData.phone}</p>
        <p className="d-inline-block h6">Rooms:</p>
        <p className="d-inline-block text-muted">{props.bookingData.rooms}</p>
        <p className="d-inline-block h6">Destination:</p>
        <p className="d-inline-block text-muted">{props.bookingData.location}</p>
        <p className="d-inline-block h6">Start Date:</p>
        <p className="d-inline-block text-muted">{(props.bookingData.checkin).toString().substring(0, 15)}</p>
        <p className="d-inline-block h6">End Date:</p>
        <p className="d-inline-block text-muted">{props.bookingData.checkout.toString().substring(0, 15)}</p>
        <p className="d-inline-block h6">Number of Days:</p>
        <p className="d-inline-block text-muted">{props.bookingData.days}</p>
        <p className="d-inline-block h6"><strong>Final Amount:</strong></p>
        <p className="d-inline-block text-muted">{props.bookingData.rooms} rooms x ₹1000/day x {props.bookingData.days} days = ₹{props.bookingData.total}</p>
      </div>

    </>
  )
}

export default Bill
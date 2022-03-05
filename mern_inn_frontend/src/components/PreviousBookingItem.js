import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import bali from '../images/bali.jpg'
import goa from '../images/goa.jpg'
import maldives from '../images/maldives.jpg'
import greece from '../images/greece.jpg'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import dateFormat from 'dateformat';
import jsPDF from 'jspdf';

function PreviousBookingItem(props) {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const generateJsPdf = ()=>{
        let doc = new jsPDF('p', 'pt');
        doc.text(20, 50, 'MERN Inn.  Invoice   ');
        doc.text(20, 90, `Booking ID: ${props.bookingData._id}`);
        doc.text(20, 110, `Name: ${props.bookingData.name}`);
        doc.text(20, 130, `Email: ${props.bookingData.email}`);
        doc.text(20, 150, `Phone: ${props.bookingData.phone}`);
        doc.text(20, 170, `Destination: ${props.bookingData.location}`);
        doc.text(20, 190, `Rooms: ${props.bookingData.rooms}`);
        doc.text(20, 210, `Check-In: ${dateFormat(props.bookingData.checkin, "mmmm dS, yyyy")}`);
        doc.text(20, 230, `Check-Out: ${dateFormat(props.bookingData.checkout, "mmmm dS, yyyy")}`);
        doc.text(20, 250, `No of Days: ${props.bookingData.days}`);
        doc.text(20, 270, `Total: ${props.bookingData.total}`);
        doc.save(`Invoice-${props.bookingData._id}`)
    }
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="200px"
                    image={
                        props.bookingData.location === "Goa" ? goa : props.bookingData.location === "Bali" ? bali : props.bookingData.location === "Maldives" ? maldives : greece
                    }
                    alt="Bali"
                />
                <CardContent style={{paddingBottom:'0'}}>
                    <p className='h5'>
                        <strong>{props.bookingData.location}</strong>
                    </p>
                    <p>
                        You booked <strong>{props.bookingData.rooms} rooms </strong>,<br/> Check-In: <strong> {dateFormat(props.bookingData.checkin, "mmmm dS, yyyy")}</strong> <br /> Check-Out: <strong> {dateFormat(props.bookingData.checkout, "mmmm dS, yyyy")}</strong><br /> Total: <strong>₹ {props.bookingData.total}</strong>
                    </p>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={handleOpen}>Get More Details</Button>
                    <Button size="small" onClick={generateJsPdf}>Download Invoice</Button>
                </CardActions>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Booking Details:
                    </Typography>
                    <hr />
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
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
                            <p className="d-inline-block h6">Check-In:</p>
                            <p className="d-inline-block text-muted">{(props.bookingData.checkin).toString().substring(0, 10)}</p>
                            <p className="d-inline-block h6">Check-Out:</p>
                            <p className="d-inline-block text-muted">{props.bookingData.checkout.toString().substring(0, 10)}</p>
                            <p className="d-inline-block h6">Number of Days:</p>
                            <p className="d-inline-block text-muted">{props.bookingData.days}</p>
                            <p className="d-inline-block h6"><strong>Final Amount:</strong></p>
                            <p className="d-inline-block text-muted">{props.bookingData.rooms} rooms x ₹1000/day x {props.bookingData.days} days = ₹{props.bookingData.total}</p>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default PreviousBookingItem
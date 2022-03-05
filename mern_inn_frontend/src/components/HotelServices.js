import React from 'react'
import { Grid } from '@mui/material';


function HotelServices(props) {
    return (
        <>
            <div className="mx-md-4 my-5 mx-sm-0 mx-xs-0 flex-column align-items-center  ">
                <Grid className='mt-3 d-flex justify-content-center' container spacing={2}>
                    <Grid className='mt-4' item md={4} sm={12} xs={12}>
                        <img src={props.src} className='rounded mw-100' alt="" />
                    </Grid>
                    <Grid className='mt-4 d-flex justify-content-center' item md={8} sm={12} xs={12}>
                        <div className="container m-2 d-flex">
                            <h3 className=' mt-4 mb-5'><strong>{props.title}</strong></h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum provident alias, ipsa unde quidem perferendis inventore harum quibusdam placeat odit architecto ad deserunt dignissimos vero ipsam voluptates? Excepturi magnam eveniet odit! Quam numquam culpa eaque vel, cupiditate expedita harum, labore explicabo molestiae molestias fuga laboriosam, itaque sed incidunt soluta eos repellat autem repudiandae praesentium. Consectetur esse praesentium harum tempore!</p>
                            <h5 className="mt-4 text-secondary">Service Hours</h5>
                            <h5 className="mt-2 text-danger">7:00 AM - 8:00 PM</h5>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <hr className='m-0'/>
        </>
    )
}

export default HotelServices

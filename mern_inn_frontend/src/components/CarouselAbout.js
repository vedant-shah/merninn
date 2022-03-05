import React from 'react'
import { Carousel } from 'react-bootstrap'
function CarouselAbout() {
    const [imageLoaded, setImageLoaded] = React.useState(false);
    return (
        <>
            <Carousel fade id='carousel' variant=''>
                <Carousel.Item>
                    <img
                        className={`w-100 ${imageLoaded ? 'd-block' : 'd-none'}`}
                        src="https://source.unsplash.com/1280x400/?hotels"
                        alt="First slide"
                        onLoad={() => setImageLoaded(true)}

                    />
                    {!imageLoaded && (
                        <div className="d-flex justify-content-center my-5">
                            <div className="spinner-border text-primary" style={{ height: "3rem", width: "3rem" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={`w-100 ${imageLoaded ? 'd-block' : 'd-none'
                            }`}
                        src="https://source.unsplash.com/1280x400/?hotel"
                        alt="Second slide"
                        onLoad={() => setImageLoaded(true)}

                    />
                    {!imageLoaded && (
                        <div className="d-flex justify-content-center my-5">
                            <div className="spinner-border text-primary" style={{ height: "3rem", width: "3rem" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={`w-100 ${imageLoaded ? 'd-block' : 'd-none'
                            }`}
                        src="https://source.unsplash.com/1280x400/?resort"
                        alt="Third slide"
                        onLoad={() => setImageLoaded(true)}

                    />
                    {!imageLoaded && (
                        <div className="d-flex justify-content-center my-5">
                            <div className="spinner-border text-primary" style={{ height: "3rem", width: "3rem" }} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )}

                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default CarouselAbout







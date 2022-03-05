import React from "react";
import { Carousel } from "react-bootstrap";
function CarouselHome() {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  return (
    <>
      <Carousel fade pause="hover" id="carousel" variant="">
        <Carousel.Item>
          <img
            className={`w-100 ${imageLoaded ? 'd-block' : 'd-none'
              }`}
            src="https://source.unsplash.com/1280x400/?bali"
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
          <Carousel.Caption className={`${imageLoaded ? 'd-block' : 'd-none'
            }`} >
            <p>Bali</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`w-100 ${imageLoaded ? 'd-block' : 'd-none'
              }`}
            src="https://source.unsplash.com/1280x400/?maldives"
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
          <Carousel.Caption className={`${imageLoaded ? 'd-block' : 'd-none'
            }`} >
            <p>Maldives</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`w-100 ${imageLoaded ? 'd-block' : 'd-none'
              }`}
            src="https://source.unsplash.com/1280x400/?greece"
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
          <Carousel.Caption className={`${imageLoaded ? 'd-block' : 'd-none'
            }`} >
            <p>Greece</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselHome;

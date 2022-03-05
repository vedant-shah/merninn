import React from "react";
import CarouselHome from "../components/Carousel";
import Homecard from "../components/Homecard";
import Inland from "../components/Inland";
import { Grid } from "@mui/material";

let goaUrl =
  "https://i.pinimg.com/originals/1f/98/f2/1f98f27908696ba7b2c07ec5952dc7ab.jpg";
let goaTitle = "Goa";
let goaDescription =
  " Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.";

let lehUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3KXCoVrQcAf2OAPhlanTvoLrwBjB7DMQnK8-0PgSKFXPYZoxctip09oVageGkzaEWePQ&usqp=CAU";
let lehTitle = "Leh-Ladakh";
let lehDescription =
  "Ladakh is most famous for breathtaking landscapes, the crystal clear skies, the highest mountain passes, thrilling adventure activities.";

let jaiUrl =
  "https://thumbs.dreamstime.com/b/animation-landscape-ancient-indian-city-temples-palaces-dwellings-river-bank-vector-illustration-125911633.jpg";
let jaiTitle = "Jaisalmer";
let jaiDescription =
  "Jaisalmer with its royal forts and palaces Jaisalmer's charm lies in its massive sand castles, forts, and colorful bazaars.";
function Home() {
  return (
    <>
      <div className="home">
        <CarouselHome></CarouselHome>
      </div>
      <div className="container my-4 ">
        <h2>
          <strong>
            Welcome to  <span id="m">M</span>
            <span id="e">E</span>
            <span id="r">R</span>
            <span id="n">N</span> <span></span> Inn! Your Go-To Holiday Booking Service!
          </strong>
        </h2>
        <br />
        <p>
          <strong>
            MERN Inn is a state of the art, hotel room booking faciltiy, It is a Full Stack Web Development mini project. It requires users to sign up/in to continue to booking page, where they can check their previous bookings or book a new room. There is a feature to download the invoice any previous booking as a PDF. The Source code is available on GitHub and can be accessed from the link in the navbar.
            <br />
            <br />
            Access 100+ resorts across India and the world, where a universe of
            experiences opens up for you. Relax by the beach in Bali. Stay in an
            igloo in Maldives. Watch the Northern Lights put up a spectacular
            show in Greece. Dine in a tree-house in Munnar. There's so much
            waiting for you.
          </strong>
        </p>
      </div>
      <div className="container  mt-2 ">
        <h2>
          <strong>New<span id="r" className="m-1">Resorts</span>, New<span id="m" className="m-1">Memories</span></strong>
        </h2>
        <br />
        <p>
          <strong>
            The world is a large place and we'd like you to experience it in all
            its beauty and wonder. Which is why, we keep expanding our network
            of resorts to offer you more than you can imagine. To create new
            experiences, new exploration, new moments of magic for you.
          </strong>
        </p>
      </div>

      <div className="container flex-column mx-auto mt-2 d-flex justify-content-center">
        <h2>
          <strong>Or you can chose from our destinations,<span id="n" className="m-1">Inland</span>:</strong>
        </h2>
        <Grid className="mt-md-3" container spacing={1}>
          <Grid className="mt-4" item md={4} sm={12} xs={12}>
            <Inland
              title={goaTitle}
              description={goaDescription}
              image={goaUrl}
            ></Inland>
          </Grid>
          <Grid className="mt-4" item md={4} sm={12} xs={12}>
            <Inland
              title={lehTitle}
              description={lehDescription}
              image={lehUrl}
            ></Inland>
          </Grid>
          <Grid className="mt-4" item md={4} sm={12} xs={12}>
            <Inland
              title={jaiTitle}
              description={jaiDescription}
              image={jaiUrl}
            ></Inland>
          </Grid>
        </Grid>
        <div className="homecard d-flex my-4 justify-content-center">
          <Homecard></Homecard>
        </div>
      </div>

    </>
  );
}

export default Home;

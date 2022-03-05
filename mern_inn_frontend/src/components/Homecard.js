import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function Homecard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--cX6HI9gA--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j71o6fyry39eaz1eyjna.jpg"
          alt="MERN Inn"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            MERN Inn.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Join us today, to avail exciting offers and to continue to booking
            your first holiday room,<strong> Right Now!</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to="/signup">
        <CardActions>
          <Button
            className="mx-auto"
            size="large"
            variant="contained"
            color="primary"
          >
            Sign-Up
          </Button>
        </CardActions>
      </Link>
    </Card>
  );
}

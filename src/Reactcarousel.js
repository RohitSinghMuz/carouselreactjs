import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

class Reactcarousel extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autplaySpeed: 2000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <h2> Responsive </h2>
        <Slider {...settings}>
          <div>
            <Card
              sx={{
                width: "275px",
                height: "275px",
                border: "1px solid grey",
                margin: "5px auto",
              }}
            >
              <CardContent>
                <Typography>One</Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                width: "275px",
                height: "275px",
                border: "1px solid grey",
                margin: "5px auto",
              }}
            >
              <CardContent>
                <Typography>2</Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                width: "275px",
                height: "275px",
                border: "1px solid grey",
                margin: "5px auto",
              }}
            >
              <CardContent>
                <Typography>3</Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                width: "275px",
                height: "275px",
                border: "1px solid grey",
                margin: "5px auto",
              }}
            >
              <CardContent>
                <Typography>4</Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                width: "275px",
                height: "275px",
                border: "1px solid grey",
                margin: "5px auto",
              }}
            >
              <CardContent>
                <Typography>5</Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                width: "275px",
                height: "275px",
                border: "1px solid grey",
                margin: "5px auto",
              }}
            >
              <CardContent>
                <Typography>6</Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                width: "275px",
                height: "275px",
                border: "1px solid grey",
                margin: "5px auto",
              }}
            >
              <CardContent>
                <Typography>7</Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
          <div>
            <Card
              sx={{
                width: "275px",
                height: "275px",
                border: "1px solid grey",
                margin: "5px auto",
              }}
            >
              <CardContent>
                <Typography>8</Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Reactcarousel;

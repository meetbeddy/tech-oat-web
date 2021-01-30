import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import WorkCards from "./WorkCard";
import styled from "styled-components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
export default class Images extends Component {
  state = {
    windows: [
      {
        id: 1,
        imageUrl: "https://placedog.net/800/640?id=1",
        description: "some stuff",
      },
      {
        id: 2,
        imageUrl: "https://placedog.net/800/640?id=2",
        description: "some  other stuff",
      },
      {
        id: 3,
        imageUrl: "https://placedog.net/800/640?id=3",
        description: "some stuff ",
      },
      {
        id: 4,
        imageUrl: "https://placedog.net/800/640?id=4",
        description: "some stuff",
      },
      {
        id: 5,
        imageUrl: "https://placedog.net/800/640?id=5",
        description: "some stuff",
      },
    ],

    doors: [
      {
        id: 1,
        imageUrl: "https://placedog.net/800/640?id=6",
        description: "some stuff",
      },
      {
        id: 2,
        imageUrl: "https://placedog.net/800/640?id=7",
        description: "some  other stuff",
      },
      {
        id: 3,
        imageUrl: "https://placedog.net/800/640?id=8",
        description: "some stuff ",
      },
      {
        id: 4,
        imageUrl: "https://placedog.net/800/640?id=58",
        description: "some stuff",
      },
      {
        id: 5,
        imageUrl: "https://placedog.net/640/480?random",
        description: "some stuff",
      },
    ],
  };

  render() {
    const StyledContainer = styled.div`
  width:100%,
  height:100%,
  margin:auto;
  text-align:center;
  h4 {
    font-family: "Pacifico", cursive;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0em;
  }
  .subtitle{
    text-align:left;
    margin-bottom:20px;
  }

  `;
    const { windows, doors } = this.state;
    return (
      <StyledContainer>
        <div className="subtitle">
          <h4>Window Samples</h4>
        </div>
        <Carousel
          swipeable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          partialVisbile={false}
          renderButtonGroupOutside={true}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
        >
          {" "}
          {windows.map((window) => {
            return (
              <WorkCards
                key={window.id}
                imageUrl={window.imageUrl}
                title={window.description}
              />
            );
          })}
        </Carousel>
        <div className="subtitle">
          <h4>Door Samples</h4>
        </div>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          // containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          {doors.map((door) => {
            return (
              <WorkCards
                key={door.id}
                imageUrl={door.imageUrl}
                title={door.description}
              />
            );
          })}
        </Carousel>
        <div className="subtitle">
          <h4>Furnitures and Partions Samples</h4>
        </div>
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          // containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-10-px"
        >
          {doors.map((door) => {
            return (
              <WorkCards
                key={door.id}
                imageUrl={door.imageUrl}
                title={door.description}
              />
            );
          })}
        </Carousel>
      </StyledContainer>
    );
  }
}

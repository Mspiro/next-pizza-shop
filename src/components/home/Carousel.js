import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageId = ["1", "2", "3"];

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      navButtonsAlwaysVisible
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
    >
      {imageId.map((id) => {
        return (
          <div
            style={{ maxHeight: "36rem" }}
            className="object-center brightness-50"
          >
            <img src={`https://picsum.photos/id/${id}/1340/600`} alt="pizza" />
          </div>
        );
      })}
    </Carousel>
  );
}

export default CarouselComponent;

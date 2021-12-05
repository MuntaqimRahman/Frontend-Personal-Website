import { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ImageCarouselProps {
  images: string[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 768 },
    items: 1,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: { max: 768, min: 600 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
  

  return (
    <>
      <Carousel
        responsive={responsive}
        arrows
        additionalTransfrom={0}
        showDots={true}
        infinite={true}
        keyBoardControl={true}
        minimumTouchDrag={80}
        renderButtonGroupOutside
      >
        {images.length > 0 &&
          images.map((imageSource) => {
            return <img width="100%" height="100%" alt="" src={imageSource} />;
          })}
      </Carousel>
    </>
  );
};

export default ImageCarousel;

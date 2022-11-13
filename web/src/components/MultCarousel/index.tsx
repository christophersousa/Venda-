import { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import produtos from "../../api/produtos.json";
import { Context } from "../../Context/AuthContext";
import { useScroll } from "../../hooks/useScroll";
import { Card } from "../Card";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1920, min: 1080 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1366, min: 780 },
    items: 3,
  },
};

export function MultCarousel() {
  const { handleProduct } = useContext(Context);

  const { backToTop } = useScroll();

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      centerMode={false}
      autoPlay={false}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-widht-40px"
    >
      {produtos.resources.map((resource, index) => {
        return (
          <Link
            to="/produto"
            onClick={() => {
              backToTop();
              handleProduct(resource);
            }}
          >
            <Card
              name={resource.title}
              urlImg={resource.imageUrl}
              valor_anterior={resource.valor_anterior}
              valor={resource.valor}
            />
          </Link>
        );
      })}
    </Carousel>
  );
}

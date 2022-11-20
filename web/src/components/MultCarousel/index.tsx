import { useContext, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import api from "../../api/api_product";
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

interface PropsProduct {
  id: number;
  nome: string;
  descricao: string;
  precoAnterior: number;
  preco: number;
  marca: string;
  foto: string;
}


export function MultCarousel() {
  const { handleProduct } = useContext(Context);
  const [produtos, setProdutos] = useState<PropsProduct[]>([]);
  const [fotos, setFotos] = useState<string[]>([]);

  const { backToTop } = useScroll();

  useEffect(() => {
    api_products.get('/produto/list')
      .then(function(response){
        let produtosData = response.data;
        setProdutos(produtosData)
      })
  }, []);

  useEffect(() => {
    produtos.map(element => {
      api_products.get(`/produto/${element.id}/download`,
          { responseType: 'arraybuffer' })
            .then(response => response.data)
            .then(data => {
              const imageBytes = data
              let blob = new Blob([imageBytes], { type: "image/jpeg" });
              let imageUrl = URL.createObjectURL(blob);
              setFotos([...fotos, imageUrl])
            })
    })

  }, [produtos])

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

      {produtos.map((resource, index) => {
        resource.foto = fotos[index];

        return (
          <Link
            key={index}
            to={`/produto/${resource.id}`}
            onClick={() => {
              backToTop();
              handleProduct(resource);
            }}
          >
            <Card
              name={resource.nome}
              urlImg={resource.foto}
              valor_anterior={resource.precoAnterior}
              valor={resource.preco}
            />
          </Link>
        );
      })}
    </Carousel>
  );
}

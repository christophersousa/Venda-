import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface PropsImg{
    img1: string | undefined;
    img2: string | undefined;
    img3: string | undefined;
}


export function CarouselProduto({img1, img2, img3}:PropsImg){
    return(
                <Carousel width={"35rem"}>
                    <div className= " h-[35rem] overflow-hidden">
                        <img
                        src={img1}
                        className="block h-full object-cover"
                        />
                    </div>
                    <div className= " h-[35rem] overflow-hidden">
                        <img
                        src={img2}
                        className="block h-full object-cover"
                        />
                    </div>
                    <div className= " h-[35rem] overflow-hidden">
                        <img
                        src={img3}
                        className="block h-full object-cover"
                        />
                    </div>
                </Carousel>

    )
}
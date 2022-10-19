import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export function CarouselProduto(){
    return(
        <div className="flex justify-center items-center">
            <div className="w-1/2">
                <Carousel>
                    <div>
                        <img src="https://images4.alphacoders.com/936/936378.jpg" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src="https://images3.alphacoders.com/857/857335.jpg" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src="https://i.pinimg.com/originals/bd/a5/be/bda5be61177acdb5fd46c3219f8b81a0.jpg" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>
            </div>

        </div>

    )
}
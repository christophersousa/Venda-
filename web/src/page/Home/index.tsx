import { Carousel } from "../../components/Carousel";
import { MultCarousel } from "../../components/MultCarousel";

export function Home(){
    return(
        <div>
            <Carousel/>
            <div className=" bg-white px-8 py-4">
                <div>
                    <h2 className="font-bold">Computadores</h2>
                </div>
                <div className="py-16">
                    <MultCarousel/>
                </div>
            </div>
        </div>
    )
}
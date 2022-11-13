import { Carousel } from "../../components/Carousel";
import { MultCarousel } from "../../components/MultCarousel";

export function Home(){
    return(
        <div>
            <Carousel/>
            <div className=" bg-white p-padding-container py-16">
                <div>
                    <h2 className="font-bold text-xl">Computadores</h2>
                </div>
                <div className="py-8 border-t-2">
                    <MultCarousel/>
                </div>
            </div>
        </div>
    )
}
import ProductCard from "../components/ProductCard/ProductCard";
import {Swiper, SwiperSlide} from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home(){
    return (
        <div className="p-2">

            <Swiper
               spaceBetween={30}
               effect={'fade'}
               navigation={true}
               pagination={{
                 clickable: true,
               }}
               modules={[EffectFade, Navigation, Pagination]}
               className="max-w-5xl rounded-lg"
            >
                <SwiperSlide className="max-w-5xl">
                    <img src="./src/assets/sale1.jpg" alt="sale image" className="w-full "/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./src/assets/sale2.jpg" alt="sale image" className="w-full"/>
                </SwiperSlide>
            </Swiper>

           <div className="flex flex-col p-3 gap-4">
            <h1 className="text-2xl font-bold text-center">Nossos produtos</h1>
			<ProductCard />
           </div>
        </div>
    )
}
import './home.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Footer from "./footer";
import home from './image/home.jpg'
import home1 from './image/home-bg-1.jpg'
import home2 from './image/home-bg-2.jpg'
import home3 from './image/home-bg-3.jpg'

import Navibar from './navbar';

function Home() {
    return (
        <div className='allhome'>
            <Navibar />
            <div className="home">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img width="100%" src={home}/></SwiperSlide>
                    <SwiperSlide><img width="100%" src={home1}/></SwiperSlide>
                    <SwiperSlide><img width="100%" src={home2}/> </SwiperSlide>
                    <SwiperSlide><img width="100%" src={home3}/></SwiperSlide>
                    
                </Swiper>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
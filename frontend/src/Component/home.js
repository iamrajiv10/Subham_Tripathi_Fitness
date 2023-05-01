import './home.css'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Footer from "./footer";
import home from './image/stf4.jpg'
import home1 from './image/stf1.jpg'
import home2 from './image/home-bg-2.jpg'
import home3 from './image/home-bg-3.jpg'
import About from './about';
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
                    <SwiperSlide><img width="100%"  src={home} alt=''/></SwiperSlide>
                    <SwiperSlide><img width="100%" src={home1} alt=''/></SwiperSlide>
                    <SwiperSlide><img width="100%" src={home2} alt=''/> </SwiperSlide>
                    <SwiperSlide><img width="100%" src={home3} alt=''/></SwiperSlide>
                    
                </Swiper>
            </div>
            <About/>
            <Footer />
            
        </div>
    )
}

export default Home;
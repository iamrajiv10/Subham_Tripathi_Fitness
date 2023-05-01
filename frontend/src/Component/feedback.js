import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import userlogo from './image/userlogo.jpg'

//######################################################################################

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";

//######################################################################################

import './feedback.css'
// import Navibar from "./navbar";


function Feedb() {
    const navigate = useNavigate();


    return (
        <div >
          <h1>What our Clients say</h1>
            <div className="feedback">
                <div className="leftfeed" >
                <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://c4.wallpaperflare.com/wallpaper/199/924/33/muscle-muscle-bodybuilding-press-wallpaper-preview.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            <img width="10%" src={userlogo} />
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            User Name <hr/>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          <img width="10%" src={userlogo} />
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            User Name <hr/>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          <img width="10%" src={userlogo} />
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            User Name <hr/>
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

                </div>
                <div className="rightfeed">
                    <Button variant="dark" onClick={() => navigate('/Feed')}>Give Feedback</Button>
                </div>
            </div>
        </div >
    )
}

export default Feedb;













// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// function Feedb() {
//     const navigate = useNavigate();

//     const [data, setData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);

//     useEffect(() => {
//         fetch(`http://localhost:4000/getfeed?page=${currentPage}&limit=50`)
//             .then((result) => {
//                 result.json().then((resp) => {
//                     setData(resp.data);
//                     setTotalPages(resp.total_pages);
//                 });
//             });
//     }, [currentPage]);

//     // const handlePrevPage = () => {
//     //     if (currentPage > 1) {
//     //         setCurrentPage(currentPage - 1);
//     //     }
//     // };

//     // const handleNextPage = () => {
//     //     if (currentPage < totalPages) {
//     //         setCurrentPage(currentPage + 1);
//     //     }
//     // };

//     return (
//         <div>
//             {/* <div>
//                 <Navibar />
//             </div> */}
//             <div className="feedback">
//                 <div className="leftfeed" >
//                     <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

//                         {data.map((item) => (
//                             <SwiperSlide>
// {/* key={item._id} */}
//                                 {/* <div className="pagination">
//                                 <Button variant="dark" disabled={currentPage <= 1} onClick={handlePrevPage}>Prev</Button>
//                                 </div> */}
                                
//                                     <div className="swipepara">
//                                         <div className="feedn">
//                                             <u> <h5>User</h5></u>
//                                         <h5>{item.Name}</h5>
//                                         </div>
//                                         <div className="feedp">
//                                             <p>" {item.Feedback} " </p>
//                                         </div>
//                                     </div>
                                
//                                 {/* <div className="paginationr">
//                                 <Button variant="dark" disabled={currentPage >= totalPages} onClick={handleNextPage}>Next</Button>
//                                 </div> */}
//                                 </SwiperSlide>
//                         ))}

//                     </Swiper>

//                 </div>
//                 <div className="rightfeed">
//                     <Button variant="dark" onClick={() => navigate('/Feed')}>Give Feedback</Button>
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default Feedb;
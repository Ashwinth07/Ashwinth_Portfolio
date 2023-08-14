import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://zero-waste-food.netlify.app/" target="_blank">
            <img src={"https://i.ytimg.com/vi/44y1bDtd1rg/maxresdefault.jpg"} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://animauniverse.netlify.app/" target="_blank"><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05IvAdB6mW3VWH5XqabZ96t3yIu7oDwL5QQ&usqp=CAU"} style={{height:"215px"}}alt="" /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://ashwinth-airway-universe.vercel.app/" target="_blank"> <img src={"https://media.istockphoto.com/id/882396802/photo/flight-search-on-internet-buy-ticket-online.jpg?s=612x612&w=0&k=20&c=T0CJ-AS5Lk3bhL7JrsmC1VM5Y7mOcYN2ck3sPPygsNM="} style={{height:"215px"}} alt="" /> </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

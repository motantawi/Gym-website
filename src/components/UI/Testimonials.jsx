import React from "react";
import "../../styles/testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar2 from "../../assets/img/avatar02.png";
import avatar1 from "../../assets/img/avatar01.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const Testimonials = () => {
  return (
    <section className="section">
      <div className="comtainer">
        <h1 className="section-title">Testimonials</h1>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper__top">
              <img src={avatar2} alt="" loading="lazy" />
            </div>
            <div className="swiper__content">
              <h4>Jesica Fernandes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptate, sapiente quas odio culpa repellendus consequatur
                deserunt iure
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__top">
              <img src={avatar1} alt="" loading="lazy" />
            </div>
            <div className="swiper__content">
              <h4>Jesica Fernandes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptate, sapiente quas odio culpa repellendus consequatur
                deserunt iure
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper__top">
              <img src={avatar2} alt="" loading="lazy" />
            </div>
            <div className="swiper__content">
              <h4>Jesica Fernandes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                voluptate, sapiente quas odio culpa repellendus consequatur
                deserunt iure
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

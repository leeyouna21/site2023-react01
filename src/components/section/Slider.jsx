import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const Slider = (props) => {
  return (
    <section id="sliderSection" className={props.attr}>
      <div className="slider__inner">
        <h2 className="blind">배너 슬라이더</h2>
        <div className="slider__img">
          <Swiper
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
          >
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    Books
                    <br /> broaden <br />
                    minds
                  </h3>
                  <p>
                    책은 우리에게 새로운 가치와 인사이트를 주며,
                    <br /> 인생의 여러 측면을 탐구하는 기회를 제공합니다. 🎉
                  </p>
                  <a href="/" className="more button-2">
                    더보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img src="./assets/images/intro/bell.png" alt="이미지" />
                  <img src="./assets/images/intro/good.png" alt="이미지" />
                  <img src="./assets/images/intro/chat.png" alt="이미지" />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    Books
                    <br /> broaden <br />
                    minds
                  </h3>
                  <p>
                    책은 우리에게 새로운 가치와 인사이트를 주며,
                    <br /> 인생의 여러 측면을 탐구하는 기회를 제공합니다. 🎉
                  </p>
                  <a href="/" className="more button-2">
                    더보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img src="./assets/images/intro/bell.png" alt="이미지" />
                  <img src="./assets/images/intro/good.png" alt="이미지" />
                  <img src="./assets/images/intro/chat.png" alt="이미지" />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider s1 container">
                <div className="text">
                  <h3>
                    Books
                    <br /> broaden <br />
                    minds
                  </h3>
                  <p>
                    책은 우리에게 새로운 가치와 인사이트를 주며,
                    <br /> 인생의 여러 측면을 탐구하는 기회를 제공합니다. 🎉
                  </p>
                  <a href="/" className="more button-2">
                    더보기
                  </a>
                </div>
                <div className="img" aria-label="hidden">
                  <img src="./assets/images/intro/bell.png" alt="이미지" />
                  <img src="./assets/images/intro/good.png" alt="이미지" />
                  <img src="./assets/images/intro/chat.png" alt="이미지" />
                </div>
                <div className="circle" aria-label="hidden">
                  <span className="circle c1"></span>
                  <span className="circle c2"></span>
                  <span className="circle c3"></span>
                  <span className="circle c4"></span>
                  <span className="circle c5"></span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;

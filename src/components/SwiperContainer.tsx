import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "../styles/global.scss";
import { useTheme } from "../context/ThemeProvider";

interface SwiperContainerProps {
  elements: { title: string; imageSrc: string; url?: string }[];
}

const SwiperContainer: React.FC<SwiperContainerProps> = ({ elements }) => {
  const { darkMode } = useTheme();

  return (
    <section
      id="elements"
      className={`elements-section justify-center items-center ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={30}
        slidesPerView='auto'
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        autoHeight={true}
        roundLengths={true}
        centeredSlides={true}
        className="elements-swiper"
      >
        {elements.map((element, index) => {
          const content = (
            <SwiperSlide key={index} className="elements-slide">
              <img
                src={element.imageSrc}
                alt={element.title}
                className="elements-image"
              />
              <span className="elements-title-text">{element.title}</span>
            </SwiperSlide>
          );

          return element.url ? (
            <a key={index} href={element.url} target="_blank" rel="noopener noreferrer" className="block">
              {content}
            </a>
          ) : (
            <React.Fragment key={index}>{content}</React.Fragment>
          );
        })}
      </Swiper>
    </section>
  );
};

export default SwiperContainer;

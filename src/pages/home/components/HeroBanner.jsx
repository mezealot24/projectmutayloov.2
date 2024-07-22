import { AiOutlineArrowRight } from "react-icons/ai";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// data
import bannerData from "@/data/banner";
import { Button } from "@/components/ui/button";

const BannerItem = ({ banner }) => {
  return (
    <div
      className="h-[650px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner.imageUrl})` }}
    >
      <div className="h-full container grid lg:grid-cols-2">
        <div className="h-full py-16 flex flex-col justify-end lg:justify-center items-center lg:items-start gap-4">
          <h1
            className="text-3xl lg:text-5xl leading-tight font-bold italic"
            dangerouslySetInnerHTML={{ __html: banner.title }}
          ></h1>
          <p
            className="text-2xl font-medium hidden lg:block"
            dangerouslySetInnerHTML={{ __html: banner.subtitle }}
          />
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

const HeroBanner = () => {
  return (
    <section className="bg-accent max-h-[650px] overflow-hidden">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {bannerData.map((banner) => (
          <SwiperSlide key={banner.id}>
            <BannerItem banner={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;

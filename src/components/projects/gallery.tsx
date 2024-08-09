import { useRef, useState } from "react";

import Image from "next/image";
import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SwiperClass from "swiper/types/swiper-class";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import "yet-another-react-lightbox/styles.css";
import { NextJsImage } from "./nextJsImage";

export const Gallery = ({ items }: { items: string[] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  const [firstSwiper] = useState<SwiperClass>();
  const [secondSwiper] = useState<SwiperClass>();
  const [myIndex, setIndex] = useState(-1);
  const thumbnailsRef = useRef(null);
  console.log("imgds:", items);

  const myImages = items?.map((image) => ({
    src: image,
  }));
  return (
    <div className="w-[100%] ">
      <Swiper
        controller={{ control: secondSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="h-[350px] w-[100%] rounded-xl md:h-[460px]"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="">
            <Image
              priority={true}
              onClick={() => setIndex(index)}
              width={900}
              height={900}
              className="w-[100%]"
              // src={`data:${item?.contentType};base64,${item?.data}`}
              src={item ?? ""}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        controller={{ control: firstSwiper }}
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress
        touchRatio={0.2}
        freeMode={true}
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, FreeMode, Thumbs, Controller]}
        className="mx-auto mt-[20px] flex h-[100px] !w-[100%] cursor-pointer justify-center rounded-xl"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-auto !w-[20%]">
            <Image
              priority={true}
              width={900}
              height={900}
              className="h-[100px] rounded-xl "
              // src={`data:${item?.contentType};base64,${item?.data}`}
              src={item ?? ""}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Lightbox
        plugins={[Thumbnails, Zoom]}
        thumbnails={{ ref: thumbnailsRef }}
        open={myIndex >= 0}
        index={myIndex}
        close={() => setIndex(-1)}
        slides={myImages}
        render={{ slide: NextJsImage }}
      />
    </div>
  );
};

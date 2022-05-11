import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ReactNode } from "react";
import Image from "next/image";
import { BoxImg, WrapperCarousel } from "./styles";

interface CarouselProps {
  posts: Post[];
}

interface Post {
  bannerURL: string;
  title: string;
  slug: string;
}

SwiperCore.use([Navigation, Pagination]);

export function Carousel({ posts }: CarouselProps) {
  const slides: ReactNode[] = [];
  posts.map((post) => {
    slides.push(
      <SwiperSlide key={`slide-${post.slug}`} tag="li">
        <BoxImg>
            <Image src={post.bannerURL} layout="fill" />
          <Link href={`/posts/${post.slug}`} passHref>
            <a className="post-title">{post.title}</a>
          </Link>
          </BoxImg>
      </SwiperSlide>
    );
  });

  return (
    <WrapperCarousel>
      <Swiper
        className="carousel"
        tag="section"
        wrapperTag="ul"
        spaceBetween={12}
        loop={true}
        mousewheel={true}
        keyboard={true}
        autoplay={true}
        modules={[ Mousewheel, Keyboard, Autoplay]}
      >
        {slides}
      </Swiper>
    </WrapperCarousel>
  );
}

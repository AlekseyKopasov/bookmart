import Swiper from 'swiper';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { type SwiperOptions } from 'swiper/types';

export default function initSwiper(elem: string, options: SwiperOptions): Swiper | null {
  if (elem) {
    const swiperElem = document.querySelector(elem) as HTMLElement;
    window.Swiper = Swiper;

    if (!window.Swiper) {
      return null;
    }

    return new Swiper(swiperElem, {
      ...options,
      modules: [Navigation, Pagination, EffectFade],
    });
  }
  return null;
}

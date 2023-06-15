

import {CCarousel,CCarouselItem, CImage } from "@coreui/react"

import One from "../../assets/1.avif";
import Second from "../../assets/2.avif";
import Third from "../../assets/3.avif";
import Fourth from "../../assets/4.avif";


function Carousel(){

    return <CCarousel controls indicators>
  <CCarouselItem>
    <CImage className="d-block w-100" src={One} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={Second} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={Third} alt="slide 3" />
  </CCarouselItem>
    <CCarouselItem>
    <CImage className="d-block w-100" src={Fourth} alt="slide 3" />
  </CCarouselItem>
</CCarousel>;

}

export default Carousel;
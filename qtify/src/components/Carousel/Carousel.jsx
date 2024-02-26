import React, {useEffect, useState} from 'react';
import styles from "./Carousel.module.css";
import { register } from 'swiper/element';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Navigation, Pagination } from 'swiper';
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

const Controls = ({data}) => {
    const swiper = useSwiper();

    useEffect(() => {
        swiper.slideTo(0)
    },[data]);
}

export default function Carousel({data, renderComponent}) {
    return (
        <div>
            <Swiper style={{padding : "0px 20px"}}
            initialSlide={0} modules={[Navigation]} slidesPreview={"auto"} spaceBetween={40} allowTouchMove>
                <Controls data={data} />
                <CarouselLeftNavigation />
                <CarouselRightNavigation />
                {data.map((ele) => {
                    <SwiperSlide>{renderComponent(ele)}</SwiperSlide>
                })}
            </Swiper>
        </div>
    )
}
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import {  ReactComponent as RightArrow } from "../../assets/RightArrow.svg";
import styles from "./CarouselRightNavigation.module.css";

export default function CarouselLeftNavigation() {
    const swiper = useSwiper();
    const [isEnd, setIsEnd ] = useState(swiper.isEnd);

    useEffect(() => {
        swiper.on("slideChange", function() {
            setIsEnd(swiper.isEnd)
        })
    },[]);

    return (
        <div>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    )
}
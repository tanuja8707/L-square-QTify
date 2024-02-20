import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../assets/hero_headphones.png";


export default function Hero() {
    return (
        <div className={styles.Hero}>
            <div className={styles.textsection}>
                <div>100 Thousand Songs, ad-free </div>
                <div>Over thousands podcast episodes</div>
            </div>
            <div className={styles.rightcontent}>
                <img src={HeroImg} alt="Hero Image" height={212} width={212} />
            </div>
        </div>
    )
}
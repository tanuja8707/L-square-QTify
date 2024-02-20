import React from "react";
import LogoImage from "../../assets/logo.png"
import styles from "./Logo.module.css";

export default function Logo() {
    return (
    <div className={styles.logodiv}>
        <img src={LogoImage} alt="QTrip Logo" width={67} />
    </div>
    )
}
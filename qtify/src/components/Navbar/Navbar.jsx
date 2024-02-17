import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo"
import Button from "./Button";
import styles from "./Navbar.module.css"


export default function Navbar() {
    return (
    <div className={styles.Navbar}>
        <Logo />
        <SearchBar />
        <Button />
        </div>
    )
}
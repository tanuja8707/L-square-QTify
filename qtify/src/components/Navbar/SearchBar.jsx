import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchButton } from "../../assets/search-icon.svg";

export default function SearchBar() {
    return (
      <div className={styles.container}>
        <input type="text" name="search" placeholder="Enter an album" className={styles.searchinput} />
        <button type="button" className={styles.searchButton}>
            <SearchButton />
        </button>
      </div>
    )
}
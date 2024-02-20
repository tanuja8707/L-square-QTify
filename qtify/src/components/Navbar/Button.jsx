import React from "react";
import styles from "./Button.module.css";

export default function SearchBar() {
    return (
      <div className={styles.feedbackdiv}>
        <button type="button" className={styles.feedbackButton}>
            Give Feedback
        </button>
      </div>
    )
}

// adding navbar
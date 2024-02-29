import React, { useState, useEffect } from "react";
import { Tab,Tabs } from "@mui/material";
import Typography from "@mui/material";
import { Box } from "@mui/material";
import styles from "./Filters.module.css";

export default function Filters({filters, selectedFilterIndex, setSelectedFilterIndex}) {
    const handleChange = (event, newValue) => {
        setSelectedFilterIndex(newValue);
    }

    function a11yProps(index) {
        return {
            id : `simple-tab-${index}`,
            "aria-controls" : `simple-tabpanel-${index}`,
        };
    }

    return (
        <div className={styles.filterWrapper}>
            <Tabs value={selectedFilterIndex} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{style: {backgroundColor: "var(--color-primary)"}}}>
                {filters.map((ele, i) => (
                    <Tab className={styles.tab} label={ele.label} {...a11yProps(i)} />
                ))}
            </Tabs>
        </div>
    )
}
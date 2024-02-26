import React, { useState, useEffect } from "react";
import { Tab,Tabs } from "@mui/material";
import Typography from "@mui/material";
import { Box } from "@mui/material";
import styles from "./Filters.module.css";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tab-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{p:3}}>
                    <Typography>{ children }</Typography>
                </Box>
            )}
        </div>
    );
}

export default function Filters({filters, selectedFilterIndex, setSelectedFilterIndex}) {
    const handleChange = (event, newValue) => {
        setSelectedFilterIndex(newValue);
    }

    function allyProps(index) {
        return {
            id : `simple-tab-${index}`,
            "aria-controls" : `simple-tabpanel-${index}`,
        };
    }

    return (
        <div>
            <Tabs value={selectedFilterIndex} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{style: {backgroundColor: "var(--color-primary)"}}}>
                {filters.map((ele, idx) => (
                    <Tab className={styles.tab} label={ele.label} {...allyProps(idx)} />
                ))}
            </Tabs>
        </div>
    )
}
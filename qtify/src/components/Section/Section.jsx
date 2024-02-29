import React, { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Filters from "../Filters/Filters";

export default function Section({title, data, filterSource, type}) {
    const [filters,setFilters] = useState([{key : "all", label: "All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);
    const [carouselToggle, setCarouselToggle] = useState(true);
    
    const handleToggle = () => {
        setCarouselToggle((prevState) => !prevState);
    }

    useEffect(() => {
        if(filterSource) {
            filterSource().then((response) => {
                const {data} = response;
                setFilters([...filters, ...data]);
            });
        }
    },[]);

    const showFilters = filters.length > 1;

    const cardsToRender = data.filter((card) =>  
        showFilters && selectedFilterIndex !== 0 
        ? card.genre.key === filters[selectedFilterIndex].key : card );

    console.log(data,"section data")
    return (
      <div className={styles.content}>  
        <div className={styles.header}>
            <Typography>{ title }</Typography>
            <Typography className={styles.toggleText} onClick={handleToggle}> 
                {!carouselToggle ? "Collapse All" : "Show All"}
            </Typography>
        </div>
        {showFilters && (
            <div className={styles.filterWrapper}>
                <Filters filters={filters} selectedFilterIndex={selectedFilterIndex} setSelectedFilterIndex={setSelectedFilterIndex} />
            </div>
        )}
        {data.length === 0 ? ( <CircularProgress /> ) : (
            <div className={styles.cardsWrapper}>
                {!carouselToggle ? (
                    <div className={styles.wrapper}>
                        {cardsToRender.map((ele,i) => (
                            <Card data={ele} type={type} key={i} />
                        ))}
                    </div>
                ) : (
                    <Carousel data={cardsToRender} renderComponent={(card_data) => <Card data={card_data} type={type} />} />
                )}
            </div>
        )}
      </div>
    );
}
import React, { useEffect } from "react";
import styles from "./Card.module.css";
import { Chip } from '@mui/material';
import axios from 'axios';
import { Link } from "react-router-dom";
import { Tooltip, Typography } from "@mui/material";

export default function Card({data, type}) {
    const getCard = (type) => {
        switch(type) {
            case "album":
                const {image, follows, title, slug, songs} = data;
                return (
                    <Tooltip title={`${songs.length} songs`} placement="top" arrow>
                        <Link to={`/album/${slug}`}>
                        <div className={styles.wrapper}>
                            <div className={styles.card}>
                                <img src={image} alt="Image Not Available" loading="lazy"  />
                                <div className={styles.banner}>
                                    <Chip label={`${follows} Follows`} size="small" className={styles.follows_chip} />
                                </div>
                            </div>
                            <div className={styles.titleWrapper}>
                                {title}
                            </div>
                        </div>
                        </Link>
                    </Tooltip>
                );
            case "song":
                const {img, likes, cardtitle} = data;
                return (
                    <div className={styles.wrapper}>
                        <div className={styles.card}>
                            <img src={img} alt="song" loading="lazy"  />
                            <div className={styles.banner}>
                                <div className={styles.pill}><p>{likes} Likes</p></div>
                            </div>
                        </div>
                        <div className={styles.titleWrapper}>
                            <p>{cardtitle}</p>
                        </div>
                    </div>
                )
            default:
                return <></>;
        }
    };
    return getCard(type);  
}
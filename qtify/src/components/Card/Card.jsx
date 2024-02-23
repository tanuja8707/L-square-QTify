import React, { useEffect } from "react";
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';
import axios from 'axios';
import { Typography } from "@mui/material";
// import { useSnackbar } from "notistack";

export default function Cards({data, type}) {
    const [albums, setAlbums] = React.useState([]); 
    // const { enqueueSnackbar } = useSnackbar();

    const getCards = (data) =>{ 
        if(type == "Top") {
            setAlbums([...data]);
        } else  if (type == "New") {
            setAlbums([...data]);

        }
    }

    useEffect(() => {
        getCards();
    },[])
   

    return (
        <>
            <div className={styles.content}> 
            <div className={styles.title}>
                 <div>Top Albums</div><div>Show all</div>
             </div>
             <div className={styles.container}>
            {albums.map((ele) => (
            
              <div className={styles.card}>
                 <div className={styles.cardbody}>
                     <div className={styles.cardimg}>
                         <img src={ele.image} alt="Image Not Available" height={100} width={100} />
                     </div>
                     <div>
                         <Chip label={`${ele.follows}`+' Follows'} className={styles.follows_chip} /> 
                     </div>
                 </div>
                 <div className={styles.cardfooter}>
                     {ele.title}
                 </div>
              </div>
             
              )
             )}
              </div>
            </div>
       </>
    )
}
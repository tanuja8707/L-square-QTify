import React, { useEffect } from "react";
import styles from "./GridOfCards.module.css";
import Chip from '@mui/material/Chip';
import CardImg from "../../assets/bollywoodhits.jpg";
import axios from 'axios';
// import { useSnackbar } from "notistack";

export default function GridOfCards() {
    const [albums, setAlbums] = React.useState([]); 
    // const { enqueueSnackbar } = useSnackbar();

    const getAlbums = async() =>{ 
        try {
            const apidata = await axios.get(`https://qtify-backend-labs.crio.do/albums/top`);
            setAlbums(apidata.data);
            console.log(apidata.data,"get album response")
            return apidata.data;
        } catch(error) {
            if (error.response && error.response.status === 400) {
                return;
                // enqueueSnackbar(error.response.data.message, { variant: "error" });
              }
        }
    }

    useEffect(() => {
        getAlbums();
    },[])
   

    return (
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
    )
}
import React from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";


export default function Navbar() {

    const topAlbums = async() => {
        const response = await axios.get("https://qtify-backend-labs.crio.do/albums/top");
        console.log(response.data,"data from top albums")
        return response.data;
    }


    return (
        <div className="">
            <Card data={topAlbums} type="Top" />
        </div>
    )
}
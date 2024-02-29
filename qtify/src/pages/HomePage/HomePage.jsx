import { fetchFilters } from "../../api/api";
import styles from "./HomePage.module.css";
import Section from "../../components/Section/Section";
import { useOutletContext } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import React from "react";

export default function HomePage() {
    const { data } = useOutletContext();
    const { newAlbums, topAlbums, songs } = data;

    return (
        <>
            <Hero />
            <div>
                <Section title="Top Albums" data={topAlbums} type="album" />
                <Section title="New Albums" data={newAlbums} type="album" />
                <div className={styles.songsSection}><Section title="Songs" data={songs} type="song" filterSource={fetchFilters} /></div>

            </div>
        </>
    )
}
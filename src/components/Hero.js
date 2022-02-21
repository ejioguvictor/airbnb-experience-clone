import React from "react";
import heroImages from "../images/group.png"
import styles from "../index.module.scss"

const Hero = () => {
    return (
        <section className={styles.hero}>
            <img src={heroImages} alt="Pictures of heroes" className={styles["hero-photo"]} />
            <h1 className={styles["hero-header"]}>Online Experiences</h1>
            <p className={styles["hero-text"]}>Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    );
}

export default Hero;
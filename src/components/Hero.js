import React from "react";
import styles from "../index.module.scss"
import group from '../images/group-picz.png'

export default function Hero() {
  return (
    <div className={styles.hero}>
      <img src={group} alt="" />
      <h1 className={styles.heroTitle}>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>

  )
}
import React from "react"
import styles from "../index.module.scss"



const Card = (props) => {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className={styles.card}>
            {
                badgeText &&
                <div className={styles["card-badge"]}>{badgeText}</div>
            }
            <img src={`../images/${props.coverImg}`} className={styles["card-image"]} alt="" />
            <div className={styles["card-stats"]}>
                <img src="../images/star.png" className={styles["card-star"]} alt="" />
                <span>{props.stats.rating}</span>
                <span className={styles.gray}>({props.stats.reviewCount}) •  </span>
                <span className={styles.gray}>{props.location}</span>
            </div>
            <p className={styles["card-title"]}>{props.title}</p>
            <p><span className={styles["bold cardPrice"]}>From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;
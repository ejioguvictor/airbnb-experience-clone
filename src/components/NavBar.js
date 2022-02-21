import React from "react"
import logo from "../images/Vector.png"
import styles from "../index.module.scss"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img src={logo} alt="Brand-logo" />
        </nav>
    )
}

export default Navbar;
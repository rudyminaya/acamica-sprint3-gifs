import React, { useContext } from 'react'
import { Store } from '../../context/Store'
import styles from './logo.module.css'

const Logo = () => {
    const { state } = useContext(Store)
    return (
        <>
            <img
                className={styles.logo}
                src={`/assets/${state.darkMode ? 'darkMode' : 'lightMode'}.png`}
                alt="logo principal"
            />
        </>
    )
}

export default Logo

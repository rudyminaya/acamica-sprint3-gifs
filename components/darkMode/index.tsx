import React from 'react'
import styles from './darkMode.module.css'

const DarkMode = () => {
    const modo = 'DARK'

    return (
        <button
            id="botonDark"
            className={styles.boton}
        >{`Modo ${modo}`}</button>
    )
}

export default DarkMode

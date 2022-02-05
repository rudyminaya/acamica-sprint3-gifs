import React from 'react'
import styles from './logo.module.css'

type Props = {
    logo: string
}

const Logo = (props: Props) => {
    return (
        <>
            <img
                className={styles.logo}
                src={`/assets/logo-desktop-${props.logo}.png`}
                alt="logo principal"
            />
        </>
    )
}

export default Logo

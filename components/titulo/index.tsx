import React, { useContext } from 'react'
import { Store } from '../../context/Store'
import styles from './titulo.module.css'

type Props = {
    titulo: string
    enfasis: string
}

const TituloPrincipal = (props: Props) => {
    const { state } = useContext(Store)
    return (
        <h1
            className={styles.tituloPrincipal}
            style={{ color: state.darkMode ? '#FFF' : '#572EE5' }}
        >
            {props.titulo} <strong>{props.enfasis}</strong>
        </h1>
    )
}

export default TituloPrincipal

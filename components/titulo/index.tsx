import React from 'react'
import styles from './titulo.module.css'

type Props = {
    titulo: string
    enfasis: string
}

const TituloPrincipal = (props: Props) => {
    return (
        <h1 className={styles.tituloPrincipal}>
            {props.titulo} <strong>{props.enfasis}</strong>
        </h1>
    )
}

export default TituloPrincipal

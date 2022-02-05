import React from 'react'
import styles from './resultados.module.css'

type Data = {
    id: string
    images: { original: { url: string } }
    title: string
}

type Props = {
    data: Data[]
}

const Resultados = (props: Props) => {
    return (
        <div className={styles.resultados}>
            {props.data.map((e, i) => {
                return (
                    <figure key={e.id + i} className={styles.imagen}>
                        <img src={e.images.original.url} alt={e.title} />
                    </figure>
                )
            })}
        </div>
    )
}

export default Resultados

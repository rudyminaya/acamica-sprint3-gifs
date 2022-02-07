import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../context/Store'
import { cambiarModoApp } from '../../utils/actionGenerator'
import styles from './darkMode.module.css'

type Props = {
    color: string
    borderColor: string
}

const DarkMode = (props: Props) => {
    const [modo, setModo] = useState<boolean>(false)
    const { dispatch } = useContext(Store)

    useEffect(() => {
        const action = cambiarModoApp(modo)
        dispatch(action)
    }, [modo])

    return (
        <button
            style={{ color: props.color, borderColor: props.borderColor }}
            onClick={() => setModo(!modo)}
            className={styles.boton}
        >{`Modo ${modo ? 'Dark' : 'Light'}`}</button>
    )
}

export default DarkMode

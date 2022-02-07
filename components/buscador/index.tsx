import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../context/Store'
import { valorDeBusqueda } from '../../utils/actionGenerator'
import styles from './buscador.module.css'

type Props = {
    onClick: () => void
}

const Buscador = (props: Props) => {
    const { state, dispatch } = useContext(Store)
    const [keyword, setKeyword] = useState<string>('')
    useEffect(() => {
        const action = valorDeBusqueda(keyword)
        dispatch(action)
    }, [keyword])
    return (
        <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
            <img
                src="/assets/main.png"
                alt="imagen de tres personas saludando"
            />
            <div
                className={styles.buscador}
                style={{ borderColor: state.darkMode ? '#FFFFFF' : '#121212' }}
            >
                <input
                    type="text"
                    className={styles.inputBuscador}
                    placeholder="Busca gifs"
                    style={{ color: state.darkMode ? '#fff' : '#121212' }}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button
                    type="submit"
                    onClick={props.onClick}
                    className={styles.boton}
                    style={{
                        borderColor: state.darkMode ? '#FFFFFF' : '#121212'
                    }}
                >
                    <img
                        src="/assets/icon-search.png"
                        alt="Botón para buscar"
                    />
                </button>
            </div>
        </form>
    )
}

export default Buscador

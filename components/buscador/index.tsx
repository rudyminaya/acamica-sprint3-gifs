import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../../context/Store'
import { valorDeBusqueda } from '../../utils/actionGenerator'
import styles from './buscador.module.css'

type Tags = {
    name: string
    analytics_response_payload: string
}

type Props = {
    onClick: () => void
    tags: Tags[]
}

const Buscador = (props: Props) => {
    const { state, dispatch } = useContext(Store)
    const [keyword, setKeyword] = useState<string>('')
    const [showPredict, setShowPredict] = useState(false)

    useEffect(() => {
        const action = valorDeBusqueda(keyword)
        dispatch(action)
        if (keyword == '') {
            setShowPredict(false)
        }
    }, [keyword])

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                setTimeout(() => setShowPredict(false), 100)
            }}
            className={styles.form}
        >
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
                    value={state.searchValue}
                    style={{ color: state.darkMode ? '#fff' : '#121212' }}
                    onChange={(e) => {
                        setKeyword(e.target.value)
                        setShowPredict(true)
                    }}
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
            {showPredict && (
                <ul className={styles.autocompletado}>
                    {props.tags &&
                        props.tags.map((e, i) => {
                            return (
                                <li
                                    key={`autocomplete-results-${i}`}
                                    className={styles.item}
                                    onClick={() => {
                                        state.searchValue = e.name
                                        setTimeout(props.onClick, 100)
                                        setTimeout(
                                            () => setShowPredict(false),
                                            100
                                        )
                                    }}
                                >
                                    <img
                                        className={styles.lupa}
                                        src="/assets/lupa.png"
                                        alt=""
                                    />
                                    {e.name}
                                </li>
                            )
                        })}
                </ul>
            )}
        </form>
    )
}

export default Buscador

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

    const buscarPorPalabras = (e: any) => {
        setKeyword(e.target.value)
    }
    useEffect(() => {
        const action = valorDeBusqueda(keyword)
        dispatch(action)
    }, [keyword])
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input
                type="text"
                placeholder="Busca gifs"
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button type="submit" onClick={props.onClick}>
                <img src="/assets/icon-search.png" alt="Botón para buscar" />
            </button>
        </form>
    )
}

export default Buscador

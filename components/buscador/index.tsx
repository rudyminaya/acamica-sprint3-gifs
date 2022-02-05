import React from 'react'
import styles from './buscador.module.css'

const Buscador = () => {
    return (
        <form>
            <input type="text" placeholder="Busca gifs" />
            <button type="submit">
                <img src="/assets/icon-search.png" alt="Botón para buscar" />
            </button>
        </form>
    )
}

export default Buscador

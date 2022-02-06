import type { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import Buscador from '../components/buscador'
import DarkMode from '../components/darkMode'
import Logo from '../components/logo'
import Resultados from '../components/resultados'
import TituloPrincipal from '../components/titulo'
import { Store } from '../context/Store'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    const { state } = useContext(Store)
    const [darkMode, setDarkMode] = useState<string>('white')
    const [listaGifs, setListaGifs] = useState<[]>([])
    const [valor, setValor] = useState<string>('')

    const listaInicial = () => {
        fetch(
            `https://api.giphy.com/v1/gifs/search?limit=12&q=${state.searchValue}&api_key=peX1bTEghEg6t36WVvw12zWyTZRwm1Bf`
        )
            .then((res) => res.json())
            .then((data) => setListaGifs(data.data))
    }

    useEffect(() => {
        listaInicial()
    }, [])
    return (
        <div className={styles.container}>
            <Head>
                <title>GIFOS</title>
                <meta
                    name="description"
                    content="Aplicación para búsqueda de gifs"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.container}>
                <Logo logo={darkMode} />
                <DarkMode />
            </div>
            <div>
                <TituloPrincipal
                    titulo="¡Inspirate y busca los mejores"
                    enfasis="GIFS!"
                />
                <Buscador onClick={listaInicial} />
                <Resultados data={listaGifs} />
            </div>
        </div>
    )
}

export default Home

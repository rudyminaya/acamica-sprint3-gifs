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
    const [listaGifs, setListaGifs] = useState<[]>([])

    const listaInicial = () => {
        fetch(
            `https://api.giphy.com/v1/gifs/search?limit=12&q=${state.searchValue}&api_key=peX1bTEghEg6t36WVvw12zWyTZRwm1Bf`
        )
            .then((res) => res.json())
            .then((list) => setListaGifs(list.data))
    }

    useEffect(() => {
        listaInicial()
    }, [])
    return (
        <div
            style={{
                borderTop: '6px solid #6809e1',
                background: state.darkMode ? '#373737' : '#fff',
                minHeight: '100vh'
            }}
        >
            <div className={styles.container}>
                <Head>
                    <title>GIFOS</title>
                    <meta
                        name="description"
                        content="Aplicación para búsqueda de gifs"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className={styles.header}>
                    <Logo />
                    <DarkMode
                        color={state.darkMode ? '#fff' : '#6809E1'}
                        borderColor={state.darkMode ? '#fff' : '#6809E1'}
                    />
                </div>
                <main className={styles.main}>
                    <TituloPrincipal
                        titulo="¡Inspirate y busca los mejores"
                        enfasis="GIFS!"
                    />
                    <Buscador onClick={listaInicial} />
                </main>
                <div className={styles.resultados}>
                    <h4
                        className={styles.tituloResultados}
                        style={{ color: state.darkMode ? '#FFF' : '#572EE5' }}
                    >
                        Resultados de la búsqueda
                    </h4>
                    <Resultados
                        data={listaGifs}
                        background={state.darkMode ? '#212121' : '#E7E7E7'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

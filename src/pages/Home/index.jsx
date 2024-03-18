import { useEffect } from 'react'

import Header from '../../Components/Header'

import { getMovies } from '../../services/movie-api'

const Home = () => {

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <Header></Header>
            <div>Home</div>
        </>
    )
}

export default Home
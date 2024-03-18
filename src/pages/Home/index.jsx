import { useEffect } from 'react'

import { getMovies } from '../../services/movie-api'

const Home = () => {

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <div>Home</div>
    )
}

export default Home

const getMovies = async () => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2M2MjIxMWNiMjJlZTY1Yjc0MDhlZmI0NTkzMGQyYyIsInN1YiI6IjY1ZjJlYTM5ZDY0YWMyMDE2NDVmODQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oxMTZqm-hRT2yKvMNoW9SkTLVQ7NJog4-izAjXAq_M4'
        }
    };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}

export { getMovies }

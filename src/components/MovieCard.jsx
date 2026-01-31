/*
export function About() {
    return (
        <h1>About Page</h1>
    )
}

created above component to show how the Named Componet are declared using export keyword.
*/

import '../css/MovieCard.css'
import { useMovieContext } from '../contexts/MovieContexts';

function MovieCard({ movie }) {
        
    const { isFavorite, addToFavorites, removeFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id)
    
    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) {
            removeFavorites(movie.id)
        } else {
            addToFavorites(movie)
        }
    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? 'active':''}`} onClick={onFavoriteClick}>
                            ♥
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard
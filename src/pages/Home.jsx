import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import '../css/Home.css'
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    
    // const movies = [
    //     { id: 1, title: "Jhon Wick", release_date: "2020" },
    //     { id: 2, title: "Terminator", release_date: "1999" },
    //     { id: 3, title: "The Matrix", release_date: "1998" }
    // ];

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load Movies...")
            }
            finally {
                setLoading(false);
            }
        }
        loadPopularMovies();
    }, [])
    
    const handleSearch = async(e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            return
        }
        if (loading) {
            return
        }

        try {
            const searchResult = await searchMovies(searchQuery);
            setMovies(searchResult);
            setError(null);
        } catch (err) {
            console.log(err)
            setError('Failed to search movie....')
        }
        finally {
            setLoading(false);
        }
        
    }
    
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form" >
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">search</button>
            </form>

            {error && <div className="error-MessageChannel"> {error} </div>}

            {loading ?
                (<div className="loading">Loading...</div>) :
                (
                    <div className="movies-grid">
                        {
                            movies.map(movie =>
                                movie.title.toLowerCase().startsWith(searchQuery) && (
                                    <MovieCard movie={movie} key={movie.id} />
                                )
                            )
                        }
                    </div>
                )
            }
        </div>
    );
}

export default Home
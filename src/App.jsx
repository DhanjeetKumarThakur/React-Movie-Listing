import MovieCard from './components/MovieCard'
import NavBar from './components/NavBar';
import Favorites from './pages/Favorites';
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import './css/App.css'
import { MovieProvider } from './contexts/MovieContexts';

function App() {

  
  // return (
  //   <>
  //     {/* <MovieCard movie = {{ title: "No Time to Die" , release_date: "2024"}} /> */}
  //     <Home/>
  //   </>
  // )


  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/favorites"  element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App

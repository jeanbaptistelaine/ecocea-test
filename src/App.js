import logo from './logo.svg'
import './App.css'
import { useMovies } from './hooks/useMovies'
import Loading from './components/Loading'
import Error from './components/Error'
import Movies from './components/Movies'

function App() {
  const { isLoading, data: movies, error } = useMovies()
  console.log(movies)
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (error) {
    return (
      <main>
        <Error />
      </main>
    )
  }
  return (
    <main>
      <Movies {...movies} />
    </main>
  )
}

export default App

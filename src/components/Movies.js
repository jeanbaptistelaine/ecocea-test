import { useState } from 'react'
import Error from './Error'
import MovieCard from './MovieCard'

const Movies = ({ page, results }) => {
  const [selectedCount, setSelectedCount] = useState(0)

  if (results) {
    return (
      <section>
        <div className='title'>
          <h2>Movies {selectedCount > 0 && `(${selectedCount} selected)`}</h2>
        </div>
        <div className='movies-grid'>
          {results.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                title={movie.title}
                popularity={movie.popularity}
                selectedCount={selectedCount}
                setSelectedCount={setSelectedCount}
              />
            )
          })}
        </div>
      </section>
    )
  } else {
    return <Error message='No results' />
  }
}

export default Movies

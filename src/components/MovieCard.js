import { useEffect, useState } from 'react'

const MovieCard = ({ title, popularity, selectedCount, setSelectedCount }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleSelect = () => {
    setIsSelected(!isSelected)
  }

  useEffect(() => {
    if (isSelected) {
      setSelectedCount(selectedCount + 1)
    } else if (!isSelected && selectedCount > 0) {
      setSelectedCount(selectedCount - 1)
    }
  }, [isSelected])

  return (
    <div
      className={`movie-card ${isSelected && 'selected'}`}
      onClick={handleSelect}
    >
      <div className='card-content'>{popularity}</div>
      <div className='card-footer'>{title}</div>
    </div>
  )
}

export default MovieCard

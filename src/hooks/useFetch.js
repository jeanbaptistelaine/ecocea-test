import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setError(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  return {
    isLoading,
    error,
    data,
  }
}

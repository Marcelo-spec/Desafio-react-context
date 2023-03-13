import { useState, useEffect } from 'react'
import getData from '../hooks/getData'

const useData = () => {
  const [data, setData] = useState( [] )

  const getImages = async () => {
    const photos = await getData()
    setData( photos )
  }

  useEffect( () => {
    getImages()
  }, [] )

  return { data }
}

export default useData
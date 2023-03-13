import "../assets/css/galeria.css"
import Card from './Card'
import useData from '../hooks/useData'
import { useContext } from 'react'
import Context from '../context/Context'

export default function Home () {
  const { favorites, setFavorites } = useContext( Context )
  const { data } = useData()


  
  const handleFavorites = ( id ) => {
 
    const newFavorites = favorites.some( favorite => favorite.id === id )
      ? favorites.filter( favorite => favorite.id !== id )
      : [...favorites, data.find( image => image.id === id )]

    setFavorites( newFavorites )
  }

  return (
    <div className="galeria grid-columns-5 p-4">
      { data.map( image => (
        <Card
          key={ image.id }
          id={ image.id }
          src={ image.src }
          alt={ image.alt }
          liked={ favorites.some( favorite => favorite.id === image.id ) }
          handleFavorites={ handleFavorites }

        />
      ) ) }
    </div>
  )
} 

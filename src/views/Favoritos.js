import { useContext } from 'react'
import CardFavorites from '../components/Favorite_Card';
import Context from '../context/Context'


export default function Favoritos () {

  const { favorites } = useContext( Context )

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {}
        { favorites.map( image => (
          <CardFavorites
            key={ image.id }
            id={ image.id }
            src={ image.src }
            alt={ image.alt }
          /> ) ) }
      </div>
    </div>
  );
}

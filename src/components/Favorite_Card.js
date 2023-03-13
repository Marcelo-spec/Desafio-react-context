const Favorite_Card = ( { src, alt } ) => {

    return (
      <div
        className='fotoFavorita'
        style={ { backgroundImage: `url(${src})` } }
      >
        <span>{ alt }</span>
      </div >
    )
  }
  
  export default Favorite_Card
  
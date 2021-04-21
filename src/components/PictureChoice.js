import { useState, useEffect } from 'react'
import axios from 'axios'

import './PictureChoice.css'

const PictureChoice = prevProps => {
  const [pictures, setPictures] = useState([])

  const handleChange = picture => {
    prevProps.setUserChoice(picture)
  }

  useEffect(() => {
    axios.get('http://localhost:4242/images').then(res => setPictures(res.data))
  }, [])

  return (
    <div className='select-picture'>
      {/* <form onSubmit=''>
        <h1 id='title-add-recipe'>Choose a picture</h1>
        <label>Copy image url :</label>
        <input
          type='text'
          id='name-categorie-input'
          placeholder='Pois chiche'
          name='name'
          onChange={event => setImgUrl(event.target.value)}
        />
      </form> */}
      <div>
        <h2 className='text-select'>Select a picture </h2>
        <div className='pictures-container'>
          {pictures.map(picture => (
            <img
              className='picture'
              onClick={() => handleChange(picture.img_url)}
              src={picture.img_url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PictureChoice

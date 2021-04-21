import { useState, useEffect } from 'react'
import axios from 'axios'

const PictureChoice = prevProps => {
  const [pictures, setPictures] = useState([])

  const handleChange = picture => {
    prevProps.setUserChoice(picture)
  }

  useEffect(() => {
    axios.get('http://localhost:4242/images').then(res => setPictures(res.data))
  }, [])

  return (
    <div>
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
        <p>or select image</p>
        {pictures.map((picture, i) => (
          <div key={i}>
            <img
              onClick={() => handleChange(picture.img_url)}
              src={picture.img_url}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PictureChoice

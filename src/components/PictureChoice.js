import { useState, useEffect } from 'react'
import axios from 'axios'

import './PictureChoice.css'

import Delete from '../website-img/trash-bin.png'

const PictureChoice = prevProps => {
  const [pictures, setPictures] = useState([])
  const [imgUrl, setImgUrl] = useState('')
  const [selected, setSelected] = useState('')

  const handleChange = picture => {
    prevProps.setUserChoice(picture)
    setSelected(picture)
  }

  const addPicture = () => {
    let newPicture = {
      img_url: imgUrl
    }
    axios.post('http://localhost:4242/images', newPicture)
  }

  const deletePicture = id => {
    axios.delete(`http://localhost:4242/images/${id}`)
  }

  useEffect(() => {
    axios.get('http://localhost:4242/images').then(res => setPictures(res.data))
  }, [])

  return (
    <div className='select-picture'>
      <div>
        <h2 className='text-select'>Select a picture </h2>
        <div className='pictures-container'>
          {pictures.map(picture => (
            <div key={picture.id} className='image-and-delete'>
              <img
                className={selected === picture.img_url ? 'selected-picture' : 'picture'}
                onClick={() => handleChange(picture.img_url)}
                src={picture.img_url}
              />
              <button
                className='button-delete'
                onClick={() => deletePicture(picture.id)}
              >
                <img id='img-trash' alt='supprimer' src={Delete} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <form className='add-picture' onSubmit={addPicture}>
        <h2 className='text-select'>or add a picture</h2>
        <input
          type='text'
          id='img-url'
          placeholder='Copy image url'
          name='name'
          onChange={event => setImgUrl(event.target.value)}
        />
        <button type='submit'>OK</button>
      </form>
    </div>
  )
}

export default PictureChoice

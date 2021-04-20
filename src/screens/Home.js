import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

import imgMeme from '../website-img/dog-meme.jpg'

const Home = () => {
  const [template, setTemplate] = useState('')

  const handleChange = (event, imgMeme) => {
    setTemplate(imgMeme)
  }

  const handleSubmit = event => {
    alert('Votre template est : ' + template.value)
    event.preventDefault()
  }
  return (
    <div id='home-page'>
      <div className='intro'>
        <div>
          <p>Make your own meme !</p>
          <p>
            Choose your template, use the picture of your choice and change the
            caption.
          </p>
        </div>
        <img className='img-intro' src={imgMeme} alt='dog with glasses' />
      </div>
      <div className='select-template'>
        <form onSubmit={handleSubmit}>
          <label>Select a model :</label>

          <img
            onClick={e => handleChange(e, imgMeme)}
            className='img-select'
            src={imgMeme}
            alt='one template'
          />
          <img
            onClick={handleChange}
            className='img-select'
            src={imgMeme}
            alt='one template'
          />
          <img
            onClick={handleChange}
            className='img-select'
            src={imgMeme}
            alt='one template'
          />
          <img
            onClick={handleChange}
            className='img-select'
            src={imgMeme}
            alt='one template'
          />
          <div>
            <Link
              className='next-step'
              key={template}
              to={{
                pathname: `/creation`
              }}
            >
              Ok
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home

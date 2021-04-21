import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

import imgMeme from '../website-img/dog-meme.jpg'

const Home = prevProps => {
  const handleChange = id => {
    prevProps.setUserTemplate(id)
  }

  const handleSubmit = event => {
    // alert('Votre template est : ' + template.value)
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
            onClick={e => handleChange(e.target.id)}
            className='img-select'
            src={imgMeme}
            alt='one template'
            id='1'
          />
          <img
            onClick={e => handleChange(e.target.id)}
            className='img-select'
            src={imgMeme}
            alt='one template'
            id='2'
          />
          <img
            onClick={e => handleChange(e.target.id)}
            className='img-select'
            src={imgMeme}
            alt='one template'
            id='3'
          />
          <img
            onClick={e => handleChange(e.target.id)}
            className='img-select'
            src={imgMeme}
            alt='one template'
            id='4'
          />
          <div>
            <Link
              className='next-step'
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

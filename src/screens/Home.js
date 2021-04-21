import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

import imgMeme from '../website-img/dog-meme.jpg'

const Home = () => {
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

      <Link
        className='next-step'
        to={{
          pathname: `/creation`
        }}
      >
        Ok
      </Link>
    </div>
  )
}

export default Home

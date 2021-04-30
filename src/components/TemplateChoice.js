import './TemplateChoice.css'
import {useState} from 'react'

import imgMeme from '../website-img/dog-meme.jpg'

const TemplateChoice = prevProps => {
  const [template, setTemplate] = useState('')
  const handleChange = id => {
    prevProps.setUserTemplate(id)
    setTemplate(id)
  }
  return (
    <div className='select-template'>
      <h2 className='text-select'>Select a model</h2>
      <div className='templates'>
        <div className={template === '1' ? 'selected' : 'one-template'}>
          <p className='caption1'>Caption This</p>
          <img
            onClick={e => handleChange(e.target.id)}
            className='img-select'
            src={imgMeme}
            alt='one template'
            id='1'
          />
        </div>
        <div className={template === '2' ? 'selected' : 'one-template'}>
          <p className='top caption2'>Caption This</p>
          <img
            onClick={e => handleChange(e.target.id)}
            className='img-select'
            src={imgMeme}
            alt='one template'
            id='2'
          />
          <p className='bottom caption2'>Caption This</p>
        </div>
        <div className={template === '3' ? 'selected' : 'one-template'}>
          <p className='top caption3'>Caption This</p>
          <img
            onClick={e => handleChange(e.target.id)}
            className='img-select'
            src={imgMeme}
            alt='one template'
            id='3'
          />
          <p className='bottom caption3'>Caption This</p>
        </div>
        <div className={template === '4' ? 'selected' : 'one-template'}>
          <img
            onClick={e => handleChange(e.target.id)}
            className='img-select'
            src={imgMeme}
            alt='one template'
            id='4'
          />
           <p className='bottom caption4'>Caption This</p>
        </div>
      </div>
      {/* <img
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
      /> */}
    </div>
  )
}

export default TemplateChoice

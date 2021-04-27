import PictureChoice from '../components/PictureChoice'
import TextChoice from '../components/TextChoice'
import TemplateChoice from '../components/TemplateChoice'
import { useState } from 'react'
import domtoimage from 'dom-to-image'

import './Creation.css'

const Creation = () => {
  const [userChoice, setUserChoice] = useState('')
  const [userTemplate, setUserTemplate] = useState('')
  const [captionTop, setCaptionTop] = useState('')
  const [captionBottom, setCaptionBottom] = useState('')
  console.log('michel :', userTemplate, userChoice)

  const captionTemplate = () => {
    if (userTemplate === '1') {
      return 'template1'
    } else if (userTemplate === '2') {
      return 'template2'
    } else if (userTemplate === '3') {
      return 'template3'
    } else if (userTemplate === '4') {
      return 'template4'
    }
  }
  const texteTop = () => {
    if (userTemplate === '4') {
      return 'invisible-caption'
    } else {
      return 'texte-top'
    }
  }
  const texteBottom = () => {
    if (userTemplate === '1') {
      return 'invisible-caption'
    } else {
      return 'texte-bottom'
    }
  }
  const saveImage = () => {
    domtoimage
      .toJpeg(document.getElementById('creation-montage'), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a')
        link.download = 'my-image-name.jpeg'
        link.href = dataUrl
        link.click()
      })
  }

  return (
    <div>
      <TemplateChoice setUserTemplate={setUserTemplate} />
      <PictureChoice setUserChoice={setUserChoice} />
      <TextChoice
        setCaptionTop={setCaptionTop}
        setCaptionBottom={setCaptionBottom}
      />
      <div
        className={
          userChoice !== '' ? 'creation-container' : 'invisible-creation'
        }
      >
        <h2 className='meme-done'>Your creation</h2>
        <div id='creation-montage'>
          <p id={texteTop()} className={captionTemplate()}>
            {captionTop}
          </p>
          <img className='photo-choisie' src={userChoice} />
          <p id={texteBottom()} className={captionTemplate()}>
            {captionBottom}
          </p>
        </div>
        <button className='save-image' onClick={saveImage}>
          Download
        </button>
      </div>
    </div>
  )
}

export default Creation

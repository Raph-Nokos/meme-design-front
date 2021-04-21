import PictureChoice from '../components/PictureChoice'
import TextChoice from '../components/TextChoice'
import TemplateChoice from '../components/TemplateChoice'
import { useState } from 'react'
import './Creation.css'

const Creation = prevProps => {
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
    } else if(userTemplate === '3'){
        return 'template3'
    }else if (userTemplate === '4'){
        return 'template4'
    }
  }
  const texteTop = () => {
      if(userTemplate === '4'){
          return 'invisible-caption'
      } else{
          return 'texte-top'}
  }
  const texteBottom = () => {
    if(userTemplate === '1'){
        return 'invisible-caption'
    } else{
        return 'texte-bottom'}
}
  return (
    <div>
      <TemplateChoice setUserTemplate={setUserTemplate} />
      <PictureChoice setUserChoice={setUserChoice} />
      <TextChoice
        setCaptionTop={setCaptionTop}
        setCaptionBottom={setCaptionBottom}
      />
      <div className='creation-montage'>
        <p id={texteTop()} className={captionTemplate()}>{captionTop}</p>
        <img className='photo-choisie' src={userChoice} />
        <p id={texteBottom()} className={captionTemplate()}>{captionBottom}</p>
      </div>
    </div>
  )
}

export default Creation

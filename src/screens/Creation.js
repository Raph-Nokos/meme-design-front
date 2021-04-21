import PictureChoice from '../components/PictureChoice'
import TextChoice from '../components/TextChoice'
import { useState } from 'react'
import './Creation.css'

const Creation = prevProps => {
  const [userChoice, setUserChoice] = useState('')
  const [captionTop, setCaptionTop] = useState('')
  const [captionBottom, setCaptionBottom] = useState('')
  console.log('michel :', prevProps.userTemplate, userChoice)
  return (
    <div>
      <PictureChoice setUserChoice={setUserChoice} />
      <TextChoice
        setCaptionTop={setCaptionTop}
        setCaptionBottom={setCaptionBottom}
      />
      <div className='creation-montage'>
        <p className={prevProps.userTemplate === "1" ? 'texte-top template1': 'texte-top template2'}>{captionTop}</p>
        <img className='photo-choisie' src={userChoice} />
        <p className='texte-bottom template2'>{captionBottom}</p>
      </div>
    </div>
  )
}

export default Creation

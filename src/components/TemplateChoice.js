import imgMeme from '../website-img/dog-meme.jpg'

const TemplateChoice = prevProps => {
  const handleChange = id => {
    prevProps.setUserTemplate(id)
  }
  return (
    <div className='select-template'>
      <h2>Select a model :</h2>

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
    </div>
  )
}

export default TemplateChoice

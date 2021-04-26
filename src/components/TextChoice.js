import './TextChoice.css'

const TextChoice = prevProps => {
  const handleChangeTop = caption => {
    prevProps.setCaptionTop(caption)
  }
  const handleChangeBottom = caption => {
    prevProps.setCaptionBottom(caption)
  }
  return (
    <div className='text-choice-container'>
      <form>
        <h2 id='text-select'>Write your caption</h2>
        <label className='indications'>Caption top:</label>
        <input
          type='text'
          id='text-user'
          placeholder='Your caption'
          name='caption-top'
          onChange={event => handleChangeTop(event.target.value)}
        />
        <label className='indications'>Caption bottom:</label>
        <input
          type='text'
          id='text-user'
          placeholder='Your caption'
          name='caption-bottom'
          onChange={event => handleChangeBottom(event.target.value)}
        />
      </form>
    </div>
  )
}

export default TextChoice

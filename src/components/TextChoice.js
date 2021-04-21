import './TextChoice.css'

const TextChoice = prevProps => {
  const handleChangeTop = caption => {
    prevProps.setCaptionTop(caption)
  }
  const handleChangeBottom = caption => {
    prevProps.setCaptionBottom(caption)
  }
  return (
    <div>
      <form onSubmit=''>
        <h2 id='text-select'>Write your caption</h2>
        <label>Caption top:</label>
        <input
          type='text'
          id='name-categorie-input'
          placeholder='Your caption'
          name='caption-top'
          onChange={event => handleChangeTop(event.target.value)}
        />
        <label>Caption bottom:</label>
        <input
          type='text'
          id='name-categorie-input'
          placeholder='Your caption'
          name='caption-bottom'
          onChange={event => handleChangeBottom(event.target.value)}
        />
      </form>
    </div>
  )
}

export default TextChoice

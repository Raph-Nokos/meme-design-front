import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Galery() {
    const [file, setFile] = useState({
        data: '',
        name: ''
      })
      const handleSubmit = () => {
        axios
          .post('http://localhost:4242/memes', {
            Name: `${file.name}`
          })
          
        const data = new FormData()
        data.append('name', file.name)
        data.append('file', file.data)
        axios
          .post('http://localhost:4242/memes', data)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }
    return(
        <div>
            <div className='form-group-add'>
            <label htmlFor='file'>Choisissez une image :</label>
            <input
              type='file'
              id='file'
              accept='image/png, image/jpeg'
              onChange={e =>
                setFile({
                  data: e.target.files[0],
                  name: e.target.files[0].name.replace(/ /g, '')
                })
              }
            />
          </div> 
        </div>
    )
}
import React, { useState, ChangeEvent } from 'react'

function State() {

    const [text,settext] = useState<string | null>('testando hook')

    const handlecharge = (e:ChangeEvent<HTMLInputElement>) => {
        settext(e.target.value) 
    }

  return (
    <div>
        <p> o texto é: {text}</p>

        <input type="text" name="" id=""  onChange={handlecharge}/>
    </div>
  )
}

export default State
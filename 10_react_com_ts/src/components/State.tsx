import React, { useState, ChangeEvent } from 'react'

export enum Linguagens {
    js= 'Javascript',
    jv= 'Java',
    cc= 'Csharp',
    p='Phytyon',
    ts='Typescrip',
}

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



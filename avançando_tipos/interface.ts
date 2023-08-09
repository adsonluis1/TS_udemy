interface types{
    boolean:boolean | string
    string: string 
    number: number | string
}

type allTypes = string | number | boolean

function showtypes(tipos:types):allTypes{
    return `tipos= boolean:${tipos.boolean} string: ${tipos.string} number: ${tipos.number}`
}

console.log(showtypes({boolean:true + ' ou false' , string:'string' , number:3 + ' ou `3` '}))

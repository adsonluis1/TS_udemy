// com o readonlyArray nn deixa colocar nenhum elemento no array
const frutas:ReadonlyArray<string>=['maçã' , 'uva' , 'pera' , 'jaca']

frutas.forEach((item)=>{
    console.log(`Fruta: ${item}`)
})
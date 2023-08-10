function analise(nota:number | boolean){
    if(typeof nota == 'number'){
        switch(nota){
            case 1:
                console.log('pessimo')
                break
            case 2:
                console.log('ruim')
                break
            case 3:
                console.log('mais ou menos')
                break
            case 4:
                console.log('bom, mas da pra melhorar')
                break
            case 5:
                console.log('otimo')
                break
            default:
                console.log('a nota tem que ser entre 1 e 5')
        }
    }else{
        console.log('Desculpe, você não deu a nota')
    }


    
}

analise(5)

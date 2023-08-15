class cordenadas {
    x
    y
    set SetX(X:number){
        if(X=== 0){
            return
        }
        this.x = X
        console.log('x alterado')
    }

    set SetY(Y:number){
        if(Y === 0){
            return
        }
        this.y = Y
        console.log('y alterado')
    }

    get ShowXY (){
        return `X = ${this.x} e Y = ${this.y}`
    }
}

const cor = new cordenadas()

console.log(cor.SetX = 100)
console.log(cor.SetY = 17)

console.log(cor.ShowXY)

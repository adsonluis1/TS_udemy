class f {
    protected protegido = 69
}

class x extends f{
    showprotegido=()=>{
        return this.protegido
    }
}

const newx = new x() 

// newx.protegido
// da erro porq o protegido esta com o protected

console.log(newx.showprotegido())
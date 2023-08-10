function allsomar(...num:number[]){
    console.log(num.reduce((valor,total)=> total + valor))
}

allsomar(189,30,50)
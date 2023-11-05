const mes = 2
switch (mes){
    case 12 :
    case 1 :
    case 2 : 
        console.log('Es invierno') 
        break
    case 3 :
    case 4 :
    case 5 :
        console.log('Es primavera')    
        break
    case 6 :
    case 7 :
    case 8 :
        console.log('Es verano')    
        break
    case 9 :
    case 10 :
    case 11 :
        console.log('Es otoño')    
        break
}   

function calcularDiaMes(elmes){
    switch(elmes){
        case 2:
            return 28
        case 4 :
        case 6 :
        case 9 :
        case 11 :
            return 30
        default:
            return 31
    }
}
const elmes =7
console.log(`El mes ${elmes} tiene: ${calcularDiaMes(elmes)} días.`)
...
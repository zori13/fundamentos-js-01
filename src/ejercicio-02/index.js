let Puntuacion = 83
if (Puntuacion >= 70)
    console.log(`Aprobado`)
else
    config.log(`Reprobado`)
const dia = 6
switch (dia) {
    case 1:
        console.log(`Lunes`)
        break
    case 2:
        console.log(`Martes`)
        break
    case 3:
        console.log(`Miércoles`)
        break
    case 4:
        console.log(`Jueves`)
        break
    case 5:
        console.log(`Viernes`)
        break
    case 6:
        console.log(`Sábado`)
        break
    case 7:
        console.log(`Domingo`)
        break
    default:
        console.log(`Día inválido`)
}


function convertirFarenheit(celsius){
    return (celsius * 9 ) /5 +32
}
const tempC=28
const tempF=convertirFarenheit(tempC)
console.log(`Temperatura en Farenheit: ${tempF}`)

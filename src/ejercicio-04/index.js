const hora = 17
if (hora < 12) {
    console.log('Buenos días')
}else if (hora >= 12 && hora < 18) {
    console.log('Buenas tardes')
} else {
    console.log('Buenas noches')
}


function esMayorDeEdad (edad){
    return edad>=18
}
const edad = 18
const estudiante= 18

if(esMayorDeEdad(edad) && estudiante){
    console.log('Es mayor de edad y estudiante')
}   else{
        console.log('no cumple las dos condiciones')
}
...
function esVocal(letra){
    const vocales ='aeiouAEIOU'
    return vocales.includes(letra)
}
const caracter = 'b'
if (esVocal(caracter)){
    console.log(`${caracter} es vocal`)
}else{
    console.log(`${caracter} no es una vocal`)
}
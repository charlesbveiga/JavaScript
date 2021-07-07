var idade = 64
if (idade < 16) {
    console.log(`Não Vota`)
} else {
    if (idade >= 16 && idade <18) {
        console.log(`Voto Opcional`)
    } else {
        if (idade >= 65) {
            console.log(`Voto opcional`)
        }
    }
    console.log(`Vota`) 
}
function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = window.document.getElementById('txtano')
   var res = window.document.getElementById('res')
   if (fano.value.length == 0 || Number (fano.value) > ano) {
       window.alert("[ERRO]verifique os dados e tente novamente")
   } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'menino.png')
           } else if (idade >= 12 && idade < 21) {
               //Adolescente
               img.setAttribute('src', 'homemadolescente.png')
           } else if (idade >= 21 && idade < 45) {
               //Homem Adulto
               img.setAttribute('src', 'homemadulto.png')
           } else if (idade >= 45 && idade < 60) {
               //Homem de 45 Anos
               img.setAttribute('src', 'homem45.png')
           } else {
               //Idoso
               img.setAttribute('src', 'homemidoso.png')
           }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'menina.png')
           } else if (idade >= 12 && idade < 21) {
               //Adolescente
               img.setAttribute('src', 'mulheradolescente.png')
           } else if (idade >= 21 && idade < 45) {
               //Mulher Adulto
               img.setAttribute('src', 'mulheradulta.png')
           } else if (idade >= 45 && idade < 60) {
               //Mulher de 45 Anos
               img.setAttribute('src', 'mulher45.png')
           } else {
               //Idoso
               img.setAttribute('src', 'mulheridosa.png')
           }
        } 
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
   }
}
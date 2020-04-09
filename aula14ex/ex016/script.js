function contagem(){
    
    var txtini = document.getElementById('numini')
    var txtfim = document.getElementById('numfim')
    var txtpas = document.getElementById('numpas')
    var res = document.getElementById('res')
    if (txtini.value == 0 || txtfim.value == 0 ){
        res.innerHTML = 'Impossivel Contar!'
    }else{
        var ini = Number(txtini.value)
        var fim = Number(txtfim.value)
        var pas = Number(txtpas.value)
        if(txtpas.value == 0){
            alert('Passo invalido! Considerando passo 1')
            var pas = 1
        }
        
        res.innerHTML = ''

        if (ini > fim){
            for(var c = ini; c >= fim;c-=pas){
                res.append(`${c} \u{1F449}`)
            }
        }
        for(var c = ini;c <= fim;c += pas){
            res.append( ` ${c} \u{1F449}`)
        
    }
    }
    
    
}
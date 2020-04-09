let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 9) {
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value,valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja encontrado na lista')
    }

    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        valores.sort()
        let menor = valores[0]
        let maior = valores[tot-1]
        let soma = 0
        
        
        for(let pos in valores){
            soma+= valores[pos]
        }
        
        let media = soma/tot
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos  ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
        res.innerHTML += `<p>${valores}</p>`
    }
}
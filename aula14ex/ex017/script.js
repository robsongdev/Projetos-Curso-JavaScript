function calcular() {
    var num = document.getElementById('txtnum')
    var tab = document.getElementById('txttab')

    if (num.value.length == 0) {
        alert('Por favor, digite um numero! ')
    }else {
        tab.innerHTML = ''
        for (var c = 1;c <=10; c++){
            var x = document.createElement('option')
            x.text = `${c} x ${num.value} = ${c*num.value}`
            tab.appendChild(x)
        }
    }
}
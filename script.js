function agregar(valor) {
    document.getElementById('pantalla').value += valor
}

function borrar() {
    document.getElementById('pantalla').value = ''
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado

}

function Raiz() {
    const raiz = document.getElementById('pantalla').value
    const resultado = Math.sqrt(raiz)
    document.getElementById('pantalla').value = resultado

}

function Red() {
    const redondeado = document.getElementById('pantalla').value
    const resultado = Math.round(redondeado)
    document.getElementById('pantalla').value = resultado


}
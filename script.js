const servidor = 'https://calculadora-fxpc.onrender.com'

async function fazerRequest(endpoint){
    const num1 = parseFloat(document.getElementById('input1').value)
    const num2 = parseFloat(document.getElementById('input2').value)
    if (isNaN(num1) || isNaN(num2)) {
        alert('Digite um número válido')
        return
    }

    const url = `${servidor}/operation/${endpoint}/${num1}/${num2}`
     const response = await fetch(url, {
         method: 'POST'
     })
     const { result, error }  = await response.json()

    if (error) {
        alert(error)
        return
    }
    
    document.getElementById('resultado').innerText = `= ${result}`
}

document.getElementById('somar').addEventListener('click', () => fazerRequest('soma'))
document.getElementById('subtrair').addEventListener('click', () => fazerRequest('subtracao'))
document.getElementById('multiplicar').addEventListener('click', () => fazerRequest('multiplicacao'))
document.getElementById('dividir').addEventListener('click', () => fazerRequest('divisao'))

let resultado = '';

function adicionar(valor) {
    resultado += valor;
    document.getElementById('resultado').value = resultado;
}

function limpar() {
    resultado = '';
    document.getElementById('resultado').value = resultado;
}

function calcular() {
    try {
        resultado = eval(resultado);
        document.getElementById('resultado').value = resultado;
    } catch (error) {
        document.getElementById('resultado').value = 'Erro';
        resultado = '';
    }
}

function calcularPorcentagem() {
    try {
        const valor = eval(resultado);
        resultado = (valor / 100).toString();
        document.getElementById('resultado').value = resultado;
    } catch (error) {
        document.getElementById('resultado').value = 'Erro';
        resultado = '';
    }
}
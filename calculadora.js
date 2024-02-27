const calcular = () => {
    let numero1 = document.getElementById("numero1");
    let numero2 = document.getElementById("numero2");
    let resultado = document.getElementById("resultado");

    resultado.value = parseInt(numero1.value) + parseInt(numero2.value);
}

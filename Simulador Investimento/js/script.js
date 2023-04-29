const resultado = document.getElementById("resultado");
const calcular = document.getElementById("calcular");
const form = document.getElementById("form-box");

calcular.onclick = calcularResultado;

form.addEventListener("submit", function(event) {
    event.preventDefault()
});

function calcularResultado(){
    var valorInicial = parseInt(document.getElementById("valorInicial").value);
    var periodoMeses = parseInt(document.getElementById("periodo").value);
    var valorAplicadoMensal = parseInt(document.getElementById("valorAplicadoMensal").value);
    var porcentagem = parseFloat(document.getElementById("porcentagem").value);

    var valorTotal = valorInicial;
    
    for(let x = 0; x < periodoMeses; x++){
        valorTotal += valorAplicadoMensal + ((valorTotal/100) * porcentagem);
    }

    console.log(valorTotal);
    if(isNaN(valorTotal) == true) {
        resultado.innerHTML = 'Preencha o Formulário';
    }else {
        resultado.innerHTML = parseInt(valorTotal) + ' Reais';
    }
    
}


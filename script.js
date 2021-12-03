document.querySelector(".hamburguer").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

// orcamento -> qntde de paginas
document.querySelector('#qtde').addEventListener("change", atualizarPreco);
document.querySelector('#js').addEventListener("change", atualizarPreco);

document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);

document.querySelector("#prazo").addEventListener("change", function () {
   const prazo = document.querySelector('#prazo').value;
   document.querySelector("label[for = prazo]").innerHTML = `Prazo: ${prazo} semanas`
   atualizarPreco();
});

function atualizarPreco() {
   const paginas = document.querySelector('#qtde').value;
   const scriptJSincluido = document.querySelector('#js').checked;
   const incluirLayout = document.querySelector('#layout-sim').checked;
   let prazo = document.querySelector('#prazo').value;

   precoFinal = 100 * paginas; // quatindade de paginas, o preco do script é o 10% de cada pagina criada
   if (scriptJSincluido) precoFinal *= 1.1;
   if (incluirLayout) precoFinal += 500;

   let taxaDeUrgencia = 1 - prazo * 0.1;
   precoFinal *= 1 + taxaDeUrgencia;

   precoFinal = precoFinal.toFixed(2);

   console.log(precoFinal);
   document.querySelector('#preco').innerHTML = `R$ ${precoFinal}`;
}


document.querySelector(".hamburguer").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

// calculo do orcamento de construcao de uma web 
document.querySelector("#qtde").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);

document.querySelector("#prazo").addEventListener("change", function () {
   const prazo = document.querySelector("#prazo").value;
   document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`;
   atualizarPreco()
});


function atualizarPreco() {
   const paginas = document.querySelector("#qtde").value;
   const scriptJS = document.querySelector("#js").checked;
   const layoutSim = document.querySelector("#layout-sim").checked;
   let prazo = document.querySelector("#prazo").value;

   let preco = paginas * 100;
   if (scriptJS) preco *= 1.1;
   if (layoutSim) preco += 500;

   let taxaUrgencia = 1 - prazo * 0.1;
   preco *= 1 + taxaUrgencia;

   console.log(preco);
   document.querySelector("#preco").innerHTML = `R$ ${preco.toFixed(2)}`;
}
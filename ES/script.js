document.querySelector(".hamburguer").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

// calculo do orcamento de construcao de uma web 
document.querySelector("#Cant").addEventListener("change", atualizarPreco);
document.querySelector("#jsES").addEventListener("change", atualizarPreco);
document.querySelector("#layout-si").addEventListener("change", atualizarPreco);
document.querySelector("#layout-noES").addEventListener("change", atualizarPreco);

document.querySelector("#plazo").addEventListener("change", function () {
   const prazo = document.querySelector("#plazo").value;
   document.querySelector("label[for=plazo]").innerHTML = `Plazo: ${prazo} semanas`;
   atualizarPreco()
});


function atualizarPreco() {
   const paginas = document.querySelector("#Cant").value;
   const scriptJS = document.querySelector("#jsES").checked;
   const layoutSim = document.querySelector("#layout-si").checked;
   let prazo = document.querySelector("#plazo").value;

   let preco = paginas * 100;
   if (scriptJS) preco *= 1.1;
   if (layoutSim) preco += 500;

   let taxaUrgencia = 1 - prazo * 0.1;
   preco *= 1 + taxaUrgencia;

   console.log(preco);
   document.querySelector("#precio").innerHTML = `€ ${preco.toFixed(2)}`;
}
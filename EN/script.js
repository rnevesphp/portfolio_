document.querySelector(".hamburguer").addEventListener("click", () =>
   document.querySelector(".container").classList.toggle("show-menu")
);

// calculo do orcamento de construcao de uma web 
document.querySelector("#pages").addEventListener("change", atualizarPreco);
document.querySelector("#jsEN").addEventListener("change", atualizarPreco);
document.querySelector("#layout-yes").addEventListener("change", atualizarPreco);
document.querySelector("#layout-no").addEventListener("change", atualizarPreco);

document.querySelector("#Deadline").addEventListener("change", function () {
   const prazo = document.querySelector("#Deadline").value;
   document.querySelector("label[for=Deadline]").innerHTML = `Deadline: ${prazo} weeks`;
   atualizarPreco()
});

function atualizarPreco() {
   const paginas = document.querySelector("#pages").value;
   const scriptJS = document.querySelector("#jsEN").checked;
   const layoutSim = document.querySelector("#layout-yes").checked;
   let prazo = document.querySelector("#Deadline").value;

   let preco = paginas * 100;
   if (scriptJS) preco *= 1.1;
   if (layoutSim) preco += 500;

   let taxaUrgencia = 1 - prazo * 0.1;
   preco *= 1 + taxaUrgencia;

   console.log(preco);
   document.querySelector("#price").innerHTML = `R$ ${preco.toFixed(2)}`;
}
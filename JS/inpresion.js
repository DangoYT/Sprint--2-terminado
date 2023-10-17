let input_nombre = document.getElementById("input_nombre");
let span_nombreTarjeta = document.querySelector(".span_nombreTarjeta");

input_nombre.addEventListener("input", function () {
  span_nombreTarjeta.textContent = input_nombre.value;
});

/* ----------------------------------------------------------------------------- */

let input_numeroTarjeta = document.getElementById("input_numeroTarjeta");
let span_numeroTarjeta = document.querySelector(".span_numeroTarjeta");

input_numeroTarjeta.addEventListener("input", function () {
  span_numeroTarjeta.textContent = input_numeroTarjeta.value;
});

/* ----------------------------------------------------------------------------- */

let month = document.getElementById("month");
let span_mes = document.querySelector(".span_mes");

month.addEventListener("input", function () {
  span_mes.textContent = month.value;
});

/* ----------------------------------------------------------------------------- */

let year = document.getElementById("year")
let span_ano = document.querySelector(".span_ano")

year.addEventListener("input", function () {
  span_ano.textContent = year.value;
});

/* ----------------------------------------------------------------------------- */

let input_cvc = document.getElementById("input_cvc")
let span_cvc2 = document.querySelector (".span_cvc2")

input_cvc.addEventListener("input", function (){
  span_cvc2.textContent = input_cvc.value;
});

/* ----------------------------------------------------------------------------- */











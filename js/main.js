'use strict';
let sectionCuadrado = document.getElementById(sectionCuadrado);

function calcularPerimetroCuadrado(){
    const valuePerimetro = document.getElementById("InputCuadrado");
    let perimetroCuadrado = valuePerimetro.value * 4;

    const parrafo = document.createElement("p");
	let contenido = document.createTextNode(`El valor del perímetro de tu cuadrado es de ${perimetroCuadrado} cm.`);
    parrafo.appendChild(contenido);
    sectionCuadrado.appendChild(parrafo);
};

function calcularAreaCuadrado(){
    const valueArea = document.getElementById("InputCuadrado");
    let areaCuadrado = valueArea.value * valueArea.value;
    console.log(areaCuadrado);
};

function calcularPerimetroTriangulo(){
    console.log("hello world");
}

function calcularAreaTriangulo(){
    console.log("hello world");
}
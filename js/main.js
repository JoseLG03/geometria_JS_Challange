'use strict';

const inputCuadrado = document.getElementById("inputCuadrado");
const btnPerimetroCuadrado = document.getElementById("buttonCuadradoPerimetro");
const btnAreaCuadrado = document.getElementById("buttonCuadradoArea");

const trianguloLadoDerecho = document.getElementById("InputTrianguloLadoDerecho");
const trianguloLadoIzquierdo = document.getElementById("InputTrianguloLadoIzquierdo");
const trianguloBase = document.getElementById("InputTrianguloBase");
const trianguloAltura = document.getElementById("InputTrianguloAltura");
const btnPerimetroTriangulo = document.getElementById("btnPerimetroTriangulo");
const btnAreaTriangulo = document.getElementById("btnAreaTriangulo");


const sectionCuadrado = document.getElementById("formCuadrado");
const sectionTriangulo = document.getElementById("formTriangulo");

inputCuadrado.addEventListener("input", function(event){
    let valueTextField = inputCuadrado.value.trim();
    stateHandle(valueTextField,btnPerimetroCuadrado,btnAreaCuadrado);
});

trianguloBase.addEventListener("input", stateHandleAreaTriangulo);
trianguloAltura.addEventListener("input", stateHandleAreaTriangulo);
trianguloBase.addEventListener("input", stateHandlePerimetroTriangulo);
trianguloLadoDerecho.addEventListener("input", stateHandlePerimetroTriangulo);
trianguloLadoIzquierdo.addEventListener("input", stateHandlePerimetroTriangulo);

function stateHandle(valueTextField,btnPerimetro, btnArea){
    if (valueTextField === "") {
        btnPerimetro.disabled = true;
        btnArea.disabled = true; 
      } else {
        btnPerimetro.disabled = false;
        btnArea.disabled = false;
      }
}

function stateHandleAreaTriangulo(){
    let value = 0;

    if(trianguloBase.value.trim() === ""){
        value++;
    }
    if(trianguloAltura.value.trim() === ""){
        value++;
    }

    if(value >0){
        btnAreaTriangulo.disabled = true;
    }else{
        btnAreaTriangulo.disabled = false;
    }
}

function stateHandlePerimetroTriangulo(){
    
    let value = 0;

    if(trianguloBase.value.trim() === ""){
        value++;
    }
    if(trianguloLadoDerecho.value.trim() === ""){
        value++;
    }
    if(trianguloLadoIzquierdo.value.trim() === ""){
        value++;
    }

    if(value >0){
        btnPerimetroTriangulo.disabled = true;
    }else{
        btnPerimetroTriangulo.disabled = false;
    }
}

function calcularPerimetroCuadrado(){

    let perimetroCuadrado = inputCuadrado.value * 4;
    let text = " Perimetro de tu Cuadrado";

    createElemento(perimetroCuadrado, sectionCuadrado,text);
};

function calcularAreaCuadrado(){

    let areaCuadrado = inputCuadrado.value * inputCuadrado.value;
    let text = " Area de tu Cuadrado";

    createElemento(areaCuadrado, sectionCuadrado, text);
};

function calcularPerimetroTriangulo(){

    let perimetroTriangulo = parseFloat(trianguloBase.value) + parseFloat(trianguloLadoDerecho.value) + parseFloat(trianguloLadoIzquierdo.value);
    let text = " Perimetro de tu Triangulo";

    createElemento(perimetroTriangulo, sectionTriangulo, text);
}

function calcularAreaTriangulo(){
 
    let areaTriangulo = (trianguloBase.value * trianguloAltura.value)/2;
    let sectionTriangulo = document.getElementById("formTriangulo");
    let text = " Area de tu Triangulo";

    createElemento(areaTriangulo, sectionTriangulo, text);
}

function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("inputRadioCirculo").value;
    const pi = Math.PI;
    
    let perimetroCirculoPre = pi * radioCirculo * 2;
    let perimetroCirculo = perimetroCirculoPre.toFixed(2);
    let sectionCirculo = document.getElementById("formCirculo");
    let text = " Perimetro de tu Circulo";

    createElemento(perimetroCirculo, sectionCirculo, text);
}

function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("inputRadioCirculo").value;
    const pi = Math.PI;
    
    let areaCirculoP = pi * radioCirculo * radioCirculo;
    let areaCirculo = areaCirculoP.toFixed(2);

    let sectionCirculo = document.getElementById("formCirculo");
    let text = " Area de tu Circulo";

    createElemento(areaCirculo, sectionCirculo, text);
}

function createElemento(value, section, text){
    const parrafo = document.createElement("p");
    parrafo.setAttribute("id", "parrafo");
	parrafo.textContent =`El valor del ${text} es de ${value} cm.`;

    if(document.getElementById("parrafo") === null){
        section.appendChild(parrafo);
    }else{
        section.removeChild(document.getElementById("parrafo"));
        section.appendChild(parrafo);
    }
}

'use strict';

const inputCuadrado = document.getElementById("inputCuadrado");
const btnPerimetroCuadrado = document.getElementById("buttonCuadradoPerimetro");
const btnAreaCuadrado = document.getElementById("buttonCuadradoArea");

const trianguloLadoDerecho = document.getElementById("InputTrianguloLadoDerecho");
const trianguloLadoIzquierdo = document.getElementById("InputTrianguloLadoIzquierdo");
const trianguloBase = document.getElementById("InputTrianguloBase");
const trianguloAltura = document.getElementById("InputTrianguloAltura");
const btnPerimetroTriangulo = document.getElementById("btnPerimetroTriangulo");
const btnAreaTriangulo = document.getElementById("buttonCuadradoTriangulo");


const sectionCuadrado = document.getElementById("formCuadrado");
const sectionTriangulo = document.getElementById("formTriangulo");

inputCuadrado.addEventListener("input", function(event){
    let valueTextField = inputCuadrado.value.trim();
    if (valueTextField === "") {
        btnPerimetroCuadrado.disabled = true;
        btnAreaCuadrado.disabled = true; 
      } else {
        btnPerimetroCuadrado.disabled = false;
        btnAreaCuadrado.disabled = false;
      }
});

trianguloBase.addEventListener("input", function(event){
    if (trianguloBase.validity.valueMissing) {
        console.log("true");
        trianguloBase.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
      } else {
        let valueTextField = trianguloBase.value.trim();
        habilitarBoton(valueTextField, btnAreaTriangulo);  
      }
});

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

    let perimetroTriangulo = parseFloat(trianguloBase.value) + parseFloat(trianguloLadoDerecho.value) + parseFloat(TrianguloLadoIzquierdo.value);
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

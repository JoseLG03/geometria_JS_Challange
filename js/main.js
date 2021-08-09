'use strict';

function calcularPerimetroCuadrado(){
    const valuePerimetro = document.getElementById("InputCuadrado");
    let perimetroCuadrado = valuePerimetro.value * 4;

    const parrafo = document.createElement("p");
	parrafo.textContent =`El valor del Perímetro de tu cuadrado es de ${perimetroCuadrado} cm.`;
    let sectionCuadrado = document.getElementById("sectionCuadrado");
    sectionCuadrado.appendChild(parrafo);
};

function calcularAreaCuadrado(){
    const valueArea = document.getElementById("InputCuadrado");
    let areaCuadrado = valueArea.value * valueArea.value;
    
    const parrafo = document.createElement("p");
	parrafo.textContent =`El valor del Área de tu cuadrado es de ${areaCuadrado} cm.`;
    let sectionCuadrado = document.getElementById("sectionCuadrado");
    sectionCuadrado.appendChild(parrafo);
};

function calcularPerimetroTriangulo(){
    const TrianguloLadoDerecho = document.getElementById("InputTrianguloLadoDerecho");
    const TrianguloLadoIzquierdo = document.getElementById("InputTrianguloLadoIzquierdo");
    const TrianguloBase = document.getElementById("InputTrianguloBase");

    let perimetroTriangulo = parseFloat(TrianguloBase.value) + parseFloat(TrianguloLadoDerecho.value) + parseFloat(TrianguloLadoIzquierdo.value);

    const parrafo = document.createElement("p");
	parrafo.textContent =`El valor del perímetro de tu triangulo es de: ${perimetroTriangulo} cm.`;
    let sectionCuadrado = document.getElementById("sectionTriangulo");
    sectionCuadrado.appendChild(parrafo);
}

function calcularAreaTriangulo(){
    const trianguloBase = document.getElementById("InputTrianguloBase").value;
    const trianguloAltura = document.getElementById("InputTrianguloAltura").value;

    let areaTriangulo = (trianguloBase * trianguloAltura)/2;
    console.log(areaTriangulo);

    const parrafo = document.createElement("p");
	parrafo.textContent =`El valor del área de tu triangulo es de: ${areaTriangulo} cm.`;
    let sectionCuadrado = document.getElementById("sectionTriangulo");
    sectionCuadrado.appendChild(parrafo);
}

function calcularPerimetroCirculo(){
    const radioCirculo = document.getElementById("inputRadioCirculo").value;
    const pi = Math.PI;
    
    let perimetroCirculoPre = pi * radioCirculo * 2;
    let perimetroCirculo = perimetroCirculoPre.toFixed(2);

    const parrafo = document.createElement("p");
	parrafo.textContent =`El valor del perímetro de tu triangulo es de: ${perimetroCirculo} cm.`;
    let sectionCuadrado = document.getElementById("sectionCirculo");
    sectionCuadrado.appendChild(parrafo);
}

function calcularAreaCirculo(){
    const radioCirculo = document.getElementById("inputRadioCirculo").value;
    const pi = Math.PI;
    
    let areaCirculoP = pi * radioCirculo * radioCirculo;
    let areaCirculo = areaCirculoP.toFixed(2);

    const parrafo = document.createElement("p");
	parrafo.textContent =`El valor del área de tu Circulo es de: ${areaCirculo} cm.`;
    let sectionCuadrado = document.getElementById("sectionCirculo");
    sectionCuadrado.appendChild(parrafo);
}
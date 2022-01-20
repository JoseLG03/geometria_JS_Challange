'use strict';

function calcularPerimetroCuadrado(){

    const valuePerimetro = document.getElementById("inputCuadrado");
    let perimetroCuadrado = valuePerimetro.value * 4;
    let sectionCuadrado = document.getElementById("formCuadrado");
    let text = " Perimetro de tu Cuadrado";

    createElemento(perimetroCuadrado, sectionCuadrado,text);

};

function calcularAreaCuadrado(){

    const valueArea = document.getElementById("inputCuadrado");
    let areaCuadrado = valueArea.value * valueArea.value;
    let text = " Area de tu Cuadrado";
    let sectionCuadrado = document.getElementById("formCuadrado");

    createElemento(areaCuadrado, sectionCuadrado, text);
};

function calcularPerimetroTriangulo(){
    const TrianguloLadoDerecho = document.getElementById("InputTrianguloLadoDerecho");
    const TrianguloLadoIzquierdo = document.getElementById("InputTrianguloLadoIzquierdo");
    const TrianguloBase = document.getElementById("InputTrianguloBase");

    let perimetroTriangulo = parseFloat(TrianguloBase.value) + parseFloat(TrianguloLadoDerecho.value) + parseFloat(TrianguloLadoIzquierdo.value);
    let sectionTriangulo = document.getElementById("formTriangulo");
    let text = " Perimetro de tu Triangulo";

    createElemento(perimetroTriangulo, sectionTriangulo, text);
}

function calcularAreaTriangulo(){
    const trianguloBase = document.getElementById("InputTrianguloBase").value;
    const trianguloAltura = document.getElementById("InputTrianguloAltura").value;

    let areaTriangulo = (trianguloBase * trianguloAltura)/2;
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
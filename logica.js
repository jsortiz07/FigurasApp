function calPerimetro(){
    //Se obtiene el valor del elemento id de la caja html
   let lado = document.getElementById('sideC'); 
    let valueC1 =parseInt(lado.value);
    let perimetro =  valueC1 *4;
    
    let resultado = `El perimetro del cuadro es: ${perimetro} cm`;
    document.getElementById('result').innerText = resultado;
    
}

function calcArea(){
    
    let ladoV2 =document.getElementById('sideC');
    let valueC2 =parseInt(ladoV2.value);

    let area = valueC2 * valueC2;
    let resultadoArea = `El area del cuadrado es: ${area} cm`;
    document.getElementById('result').innerText = resultadoArea;

}

function calcPerimetroTriangulo(){
    let sideT1 = document.getElementById('sideT1');
    let sideT2 = document.getElementById('sideT2');
    let sideT3 = document.getElementById('sideT3');

    let valueT1 = parseInt(sideT1.value);
    let valueT2 = parseInt(sideT2.value);
    let valueT3 = parseInt(sideT3.value);
    let PerimetroT = valueT1 + valueT2 + valueT3;

    resultadoPerT = `El perimetro del triangulo es: ${PerimetroT} cm`
    document.getElementById('result').innerText = resultadoPerT;

}

function calcAreaTriangulo(){
    let altT =document.getElementById('t-base').value;
    let baseT = document.getElementById('t-altura').value;
    altT = parseInt(altT);
    baseT = parseInt(baseT);

    let areaT = altT * baseT;

    resultadoAt = `El area del triangulo es : ${areaT} cm`;
    document.getElementById('result').innerText = resultadoAt;


}


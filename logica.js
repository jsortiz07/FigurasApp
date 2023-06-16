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
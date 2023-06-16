function calPerimetro(){
   let lado = document.getElementById('sideC'); 
    let valueC1 =parseInt(lado.value);
    let perimetro =  valueC1 *4;
    
    let resultado = `El perimetro del cuadro es: ${perimetro} cm`;
    document.getElementById('result').innerText = resultado;
    
}

function area(){
    let area = lado * lado;
    let 

    return area;
}

let quantosAnos;
let quantosMeses;
let quantosDias;

function transforme (){
    quantosAnos = document.getElementById('anoImput').value ;
    quantosMeses = document.getElementById('mesImput').value ;
    quantosDias = document.getElementById('diaImput').value ;

    let anosEmDias = quantosAnos * 365;
    let mesesEmDias = quantosMeses * 30;

    let resultFinal = +anosEmDias + +mesesEmDias + +quantosDias;

    document.getElementById("resulatdoDosAnos").innerHTML= resultFinal;
    console.log(resultFinal);
};

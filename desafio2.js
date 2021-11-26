const nota1= document.getElementById("nota1");
const nota2= document.getElementById("nota2");
const nota3= document.getElementById("nota3");
const btn= document.getElementById("btn-promediar");
const resultado= document.getElementById("resultado");
let promedio=0;


btn.addEventListener("click",promediar);

function promediar() {

    console.log(nota1.value);
    promedio= parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value);
    promedio = promedio/3;
    resultado.innerHTML = promedio.toFixed(2);

    if(promedio>=7){
        resultado.classList.remove('rojo')
        resultado.classList.add('verde');
    }else{
        resultado.classList.remove('verde');
        resultado.classList.add('rojo');
    }

    console.log(promedio/3);
    


    
    
}

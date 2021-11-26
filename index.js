

const num1= document.getElementById("num1");
const num2= document.getElementById("num2");
const btn= document.getElementById("btn-sumar");
let sumando =0;

/*escuchar al evento clic*/

btn.addEventListener ("click",sumar);

function sumar () {
    console.log(num1.value);
    sumando = parseInt(num1.value) +parseInt(num2.value);
    document.getElementById("resultado").innerHTML=sumando;


}
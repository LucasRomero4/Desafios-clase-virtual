const btn1= document.getElementById("btn-color1");
const btn2= document.getElementById("btn-color2");
const btn3= document.getElementById("btn-color3");
const fondo= document.getElementById("fondo")

btn1.addEventListener("click",btncolor1)
function btncolor1() {
    fondo.style.background="yellow"


    
}
btn2.addEventListener("click", btncolor2)
function btncolor2() {
    fondo.style.background="orange"
    
}
btn3.addEventListener("click",btncolor3)
function btncolor3() {
    fondo.style.background="blue"
    
}
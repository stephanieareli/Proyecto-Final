function limpiarformulario (){
document.getElementById("miForm").reset();
}
var por = function (n1,n2){
var num1=parseFloat(document.getElementById("num1").value);
var num2=parseFloat(document.getElementById("num2").value);
porciento= (num1 * 100)/ num2 ;
return "Los datos que usted digitó son:    " + num1 + "de" +num2 + "por lo tanto el porciento es de:   " + porciento;
}






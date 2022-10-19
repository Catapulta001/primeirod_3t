function calcula(){
    let c = document.getElementById("valor").Value;
    let j = document.getElementById("juros").Value;
    let r = c * (1+ (j/200));
document.write("Resultado: " + r);
}
let op = "";
function opercao(ope){
    op = ope;
}
function calcula(){
    let c = document.getElementById(" v1 ").Value;
    let j = document.getElementById(" v2 ").Value;
    let r = 0;
   
    if(op == " + "){
     r = Number(v1) + Number(v2);
    
    }


   document.getElementById ("resultado").innerHTML = r;

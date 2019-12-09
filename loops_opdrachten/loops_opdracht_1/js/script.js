//javascript code
function showloop(){
    var a;
    var text="";

    for (a=1;a <=5; a++){
    console.log(a);
    text += "Nummer" + a +"<br>"
}
document.getElementById("loop").innerHTML = text;
}
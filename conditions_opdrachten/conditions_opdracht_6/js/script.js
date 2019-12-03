//javascript code

function berekenen() {
    var getal1 = parseInt(document.getElementById("getal1").value);
    var getal2 = parseInt(document.getElementById("getal2").value);
    var operator = (document.getElementById("operator").value);

    if (operator == "+") {
        document.getElementById("antwoord").innerHTML = getal1 + getal2;
    
    }
    if (operator == "-") {
        document.getElementById("antwoord").innerHTML = getal1 - getal2;
      
    }
    if (operator == "*") {
        document.getElementById("antwoord").innerHTML = getal1 * getal2;
      
    }
    if (operator == "/") {
        document.getElementById("antwoord").innerHTML = getal1 / getal2;
      
    }

}
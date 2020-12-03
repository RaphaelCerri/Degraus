"use strict";
var deg = parseFloat(prompt("digite a altura do degrau"));
var b = parseFloat(prompt("digite a altura que você deseja alcançar"));

var qnt = b/deg

alert("Para " + b + " metros, você precisará de " + qnt.toFixed(1) + " Degraus");
    

var dado1 = Math.ceil(Math.random()*6)+0;
var dado2 = Math.ceil(Math.random()*6)+0;

alert("Questo è il primo dado: " + dado1);
alert("Questo è il secondo dado: " + dado2);

if (dado1 > dado2) {
  alert("Il primo dado: " + dado1 + " vince sul secondo dado: " + dado2);
} else if (dado1 < dado2){
  alert("Il secondo dado: " + dado2 + " vince sul primo dado: " + dado1);
} else if (dado1 == dado2) {
  alert("Nessuno dei due dadi è il vincitore")
}

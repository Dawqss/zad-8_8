
var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";

var textReplacment = "Zielone słonie";

var textReplacmentUpperCase = textReplacment.toUpperCase();

var textAfter = text.replace('Papugi', textReplacmentUpperCase);

console.log(textAfter.slice(0, textAfter.length/2));
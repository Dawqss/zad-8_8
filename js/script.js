
var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.",
	textReplacment = "Zielone słonie",
	textReplacmentUpperCase = textReplacment.toUpperCase(),
	textAfter = text.replace('Papugi', textReplacmentUpperCase);

console.log(textAfter.slice(0, textAfter.length/2));
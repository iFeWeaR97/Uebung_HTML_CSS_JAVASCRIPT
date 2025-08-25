const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Wir benutzen Filter um alle wörter < 6  zu Prüfen.

console.log(words.some((word) => {
  return word.length < 6;
}));

// Wir benutzen Filter um alle wörter > 5 in unserem neuen Array zu speichern.

const interestingWords = words.filter((word) => {

  return word.length > 5;
});



// Wir benutzen every um alle wörter > 5 auszugeben als bool (true or false)

console.log(interestingWords.every((word) => { 
  return word.length > 5;
} ));


// Link für Array Funktionen https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
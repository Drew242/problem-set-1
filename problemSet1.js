function letterCapitalize(string) {
  var words = string.split(' ');
  var newWords = []

  for (i = 0; i < words.length; i++) {
    newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  console.log(newWords.join(' '));
}

letterCapitalize("dog cat monkey");

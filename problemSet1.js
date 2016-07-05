function letterCapitalize(string) {
  var words = string.split(' ');
  var newWords = []

  for (i = 0; i < words.length; i++) {
    newWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  }
  console.log(newWords.join(' '));
}

letterCapitalize("dog cat monkey");

function wordCount(string) {
  var words = string.split(' ');
  console.log(words.length);
}

wordCount('Never eat shredded wheat');

function isPrime(n) {
  var prime = []
  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      prime.push('no');
    }
    else {
      prime.push('yes');
    }
  }
  if (prime[0] == 'yes') {
    console.log(true);
  } else {
    console.log(false);
  }
}

isPrime(7);
isPrime(256);
isPrime(83);
isPrime(127);
isPrime(132);

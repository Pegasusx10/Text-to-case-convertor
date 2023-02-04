const kebabCase = str => str
        // .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        // .join('-')
        // .toLowerCase();

console.log(sentence.toLowerCase());
  
    console.log(kebabCase('Geeks For Geeks'));
    console.log(kebabCase('GeeksForGeeks'));
    console.log(kebabCase('Geeks_For_Geeks'));
class Formatter {
  
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    const words = string.split(' ');

    for (let i = 0; i < words.length; i++) {
      if (words[i] !== 'a' || words[i] !== 'an' || words[i] !== 'but' || words[i] !== 'of' || words[i] !== 'and' || words[i] !== 'for' || words[i] !== 'at' || words[i] !== 'by' || words[i] !== 'from' || words[i] !== 'the' ) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      } 
    }

    return words.join(' ');
  }

}
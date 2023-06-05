class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }
  static titleize(string) {
    const wordsExcluded = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const newString = string.split(" ");
    for (let index = 0; index < newString.length; index++) {
      if (wordsExcluded.indexOf(newString[index]) === -1) {
        newString[index] = this.capitalize(newString[index]);
      }
    }
    return this.capitalize(newString.join(" "));
  }
}

class Marker {
  constructor(size,color,remainingInk){
    this.size = size;
    this.color = color;
    this.remainingInk = remainingInk;
  }
  write(word){
      let phrase = '';
      word.split('').forEach(letter=>{
          if (letter !== ' ' && this.remainingInk > 0){
            this.remainingInk -= 1;
            phrase += letter;
          } else if (letter === ' '){
              phrase += letter;
          }
      })
      return phrase;
  }
}

module.exports = Marker

class Desk {
  constructor(length,width,height,isWhiteboard){
      this.length = length;
      this.width = width;
      this.height = height;
      this.isWhiteboard = isWhiteboard;
      this.content = '';
  }
  write(str){
      this.content += str;
      return this.content;
  }
  wipe(){
      if (this.isWhiteboard){
          this.content = '';
      }
  }
}

module.exports = Desk

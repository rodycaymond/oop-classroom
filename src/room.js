class Room {
  constructor(name, description){
      this.name = name; 
      this.description = description;
      this.contents = [];
  }
  add(item){
      this.contents.push(item);
      return this;
  }
  has(thing){
      return this.contents.includes(thing);
  }
}

module.exports = Room

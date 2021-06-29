class Computer {
  constructor(name,operatingSystem,processor,memory,graphics){
      this.name = name;
      this.operatingSystem = operatingSystem;
      this.processor = processor;
      this.memory = memory;
      this.graphics = graphics;
      this.on = false;
  }
  power(){
    if (!this.on){
      this.on = true;
      return this.on;
    } else {
      this.on = false;
      return this.on;
    }
  }
}
module.exports = Computer

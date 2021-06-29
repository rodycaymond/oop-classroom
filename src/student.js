class Student {
  constructor(name,skillLevel){
      this.name = name;
      this.skillLevel = skillLevel;
      this.assignments = [];
  }
  study(){
      if (this.skillLevel < 100){
        this.skillLevel += 1;
        return this;
      }
  }
  doHomework(homework = null){
      if (homework === null){
          let skill = this.assignments.filter(assignment=>{
              return assignment.skillLevel < this.skillLevel;
          })
          if (skill.length){
              this.assignments.forEach(item=>{
                  item.completed = true;
              })
          }
      } else if (homework.skillLevel && homework.skillLevel > 1 && homework.skillLevel < 101){
            if (this.skillLevel >= homework.skillLevel){
                homework.completed = true;
                this.assignments.push(homework);
            } else {
                homework.completed = false;
                this.assignments.push(homework);
            }
        }
    }
}

module.exports = Student

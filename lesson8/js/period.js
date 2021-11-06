export default class Period {
   constructor(name, performance, goal) {
      this.name = name;
      this.performance = performance;
      this.goal = goal;
      this.exact = (goal == performance);
      this.met = (performance > goal);
   }
}
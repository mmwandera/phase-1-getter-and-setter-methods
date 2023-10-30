// Add your Circle class here
// First, let's create a class of Circle
class Circle{
    // Circle will accept 1 parameter, radius, and use this.radius to store the value
    constructor(radius){
        this.radius = radius;
    }
    // Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
    get diameter(){
        return this.diameter = this.radius * 2
    }
    get circumference(){
        return this.circumference = 2 * Math.PI * this.radius
    }
    get area(){
        return this.area = Math.PI * this.radius**2
    }
    // Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly
    set diameter(value) {
        if (value < 0) {
          throw new Error("Diameter cannot be negative");
        }
        this.radius = value / 2;
      }
      set circumference(value) {
        if (value < 0) {
          throw new Error("Circumference cannot be negative");
        }
        this.radius = value / (2 * Math.PI);
      }
      set area(value) {
        if (value < 0) {
          throw new Error("Area cannot be negative");
        }
        this.radius = Math.sqrt(value / Math.PI);
      }
}
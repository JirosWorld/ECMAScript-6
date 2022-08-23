// old way: Function syntax

// var SpaceShuttle = function(targetPlanet){
//     this.targetPlanet = targetPlanet;
//   }
//   var zeus = new SpaceShuttle('Jupiter');
  
//   console.log(zeus.targetPlanet)

// new way: Class syntax

class SpaceShuttle {
    constructor(targetPlanet){
      this.targetPlanet = targetPlanet;
    }
  }
  var zeus = new SpaceShuttle('Jupiter');
  
  console.log(zeus.targetPlanet)
  
  
  
  // function makeClass() {
  
  //   return Vegetable;
  // }
  // const Vegetable = makeClass();
  // const carrot = new Vegetable('carrot');
  // console.log(carrot.name); 

  function makeClass() {
    class Vegetable {
      constructor(name){
        this.name = name;
      }
    }
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 
// class Car{
//     Car(model,color){
//         this.model=model;
//         this.color =color;
//     }
//     display(){
//         console.log("model:"+this.model);
//          console.log("color:"+this.color);
//     }
//     const car1 = new Car ("R8","Red");
//      const car2 = new Car ("Swift","White");
//       car1.display();
//       car2.display();
// }

// oops in one program
// class Animal{
//          constructor(name){
//             this.name= name;
//          }
//          sound(){
//             console.log(this.name+"makes sound");

//          }}
//          class Cat extends Animal{
//             sound(){
//                 console.log(this.name+"mews");
//             }

//          }
//          class Lion extends Animal{
//             sound(){
//                 console.log(this.name+"Roar");
//             }
//          }
//          const a1 = new Animal("Animal");
//          const a2 = new Cat("Chiko");
//          const a3 = new Lion("Shabu");
//          a1.sound();a2.sound();a3.sound();

class vehicle{
         constructor(name){
            this.name= name;
         }
         produced(){
            console.log(this.name+"heavy sound");

         }}
         class motorbike extends vehicle{
            produced(){
                console.log(this.name+"huiiiihuiiiiizeeee sound");
            }

         }
         class tracktor extends vehicle{
            produced(){
                console.log(this.name+"thakkkthakkkkthakkkkkkkkk");
            }
         }
         const a1 = new vehicle("vehicle");
         const a2 = new motorbike(" ninja");
         const a3 = new tracktor("sonali ka tractor");
         a1.produced();a2.produced();a3.produced();





window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidePreloader'));


const createCars = (() => {

 //CAR DATA

 const cars = [];

 //car class

 class Car {
  constructor(make, country, img, special, model, price, type, trans, gas){

   this.make = make;
   this.country = country;
   this.img = img;
   this.special = special;
   this.model = model
   this.price = price;
   this.type = type;
   this.trans = trans;
   this.gas = gas;
  }
 }

 //CAR CREATION FUNCTION

 function makeCar(make, country, img ='images/car4.jpeg', special = true, model = 'new model', price = 10000, type = 'sedan', trans = 'automatic', gas = '50'){

  const car = new Car(make, country, img, special, model, price, type, trans, gas);

  cars.push(car);
 }

 //PRODUCE CARS

 function produceCars(){
  makeCar('chevy' , 'american');
  makeCar('mercedes', 'german', 'images/car1.jpeg',true);
  makeCar('bmw', 'german', 'images/car7.jpeg');
  makeCar('bmw', 'german',  'images/car7.jpeg',false, 'some model');
  makeCar('bmw', 'german',  'images/car6.jpeg', undefined,'other model');
  makeCar('mercedes', 'german', 'images/car4.jpeg', false);
  makeCar('chevy' , 'american', 'images/car5.jpeg' );
  makeCar('chevy' , 'american', 'images/car6.jpeg', false );
  makeCar('chevy' , 'american', 'images/car4.jpeg', false );
  makeCar('chevy' , 'american', 'images/car5.jpeg', false );
  makeCar('chevy' , 'american', 'images/car6.jpeg', false );


 }

 produceCars();
 //console.log(cars);

 // SPECIAL CARS

 const specialCars = cars.filter(car => car.special === true)
 //console.log(specialCars);

 return{
   cars,
   specialCars
 } 




 
}) ();

// console.log(createCars.cars);
// console.log(createCars.cars.specialCars);

const displaySpecialCars = ( (createCars) => {

  const specialCars = createCars.specialCars;

 // console.log(specialCars);

  const  info = document.querySelector('.featured-info');

  //document loaded event

  document.addEventListener('DOMContentLoaded', () => {
    info.innerHTML = '';

    let data = '';

    specialCars.forEach(item => {

       data += ` <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
      <span data-img ="${item.img}" class="featured-icon">
         <i class="fas fa-car"></i>
      </span>

       <h5 class="font-weight-bold mx-1">${item.make}</h5>
       <h5 class="f mx-1">${item.model}</h5>
       </div>`

    })

    info.innerHTML = data;
  })

  //change img

  info.addEventListener('click', (event) => {

    if(event.target.parentElement.classList.contains("featured-icon")){
     
      const img = event.target.parentElement.dataset.img;
     
      document.querySelector('.featured-photo').src = img;

    }
    

    
  
  });



})(createCars);

const displayCars = ((createCars) => {

  // all cars
  const cars = createCars.cars;

  //car container
  const inventory = document.querySelector('.inventory-container');
 
   //CONTENT LOADED
   document.addEventListener('DOMContentLoaded', () => {
      inventory.innerHTML = " ";

      let output = " ";
      cars.forEach((car) => {
        output +=
         ` <div class="col 10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
        <div class="card car-card">

           <img src="${car.img}" class="card-img-top car-img" alt="car">

           <div class="card-body">
              <div class="car-info d-flex justify-content-between">

                 <div class="car-text text-uppercase">
                    <h6 class="font-weight-bold">${car.make}</h6>
                    <h6>${car.model }</h6>
                 </div>

                 <h5 class="car-value align-self-center py-2 px-3">$
                    <span class="car-price">${car.price}</span>
                 </h5>

              </div>

           </div>

           <div class="card-footer text-capitalize d-flex justify-content-between">
              <p><span><i class="fas fa-car"></i></span>${car.type}</p>
                  <p><span><i class="fas fa-cogs"></i></span>${car.trans}</p>
              <p><span><i class="fas fa-gas-pump"></i></span>${car.gas} </p>
           </div>

        </div>

     </div>`

      })

      inventory.innerHTML = output;

   })



  
})(createCars);


//FILTER CARS


const filterCars = (() => {
   const filter = document.querySelectorAll('.filter-btn');
   
   filter.forEach((btn) => {
      btn.addEventListener('click', (event) => {
         const value = event.target.dataset.filter;
         const singleCar = document.querySelectorAll(".single-car");

         singleCar.forEach(car => {
            if (value === 'all') {
               car.style.display = 'block';

            }
            else {
               (!car.classList.contains(value)) ? car.style.display  = 'none' : car.style.display  = 'block';
            }
         })
      })
   })

}) ();

// show modal




































































  // // REVEAL PATTERN
  // // LIFE IMMEDIATELY INVOKED FUNCTION EXPRESSION

  // //FUNCTION DECLARATION

  // function sayHi(){
  //  console.log('Hello');
  // }
  //  // Invoke the function
  // //sayHi();

  // // FUNCTION EXPRESSION

  // var person = function(name){

  //   console.log(`hello i am ${name}`);


  // };

  // // CALL THE FUNCTION
  // // person('john'); 



  // // IMMEDIATELY INVOKED SEPERATELY
  // // DOES NOT NEED TO BE INVOKED SEPERATELY
  // //VARIABLES NOT IN GLOBAL SCOPE

  // ( function () {

  //  //PRIVATE VARIABLE NOT IN THE GLOBAL SCOPE
  //  // var name = 'john';
  //  // console.log(name);
  //  // console.log('hello');

  // })();

  // console.log(name);



  // // OUR MODULES

  
  
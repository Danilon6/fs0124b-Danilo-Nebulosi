import { Injectable } from '@angular/core';
import { iCars } from './models/cars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  getAllcars():Promise<iCars[]>{
    return fetch("../assets/db.json")
    .then(cars => cars.json())
  }

  getAvailableCars(){
    return this.getAllcars()
    .then(cars => {
      const availableCarsArr:iCars[] =[];
      for (let i = 0; i < cars.length; i++) {
        if (cars[i].available) {
          availableCarsArr.push(cars[i])
        }
      }
      return availableCarsArr
    }
    )
  }

  getRandomAvailableCars(n:number):Promise<iCars[]>{
    return this.getAvailableCars()
    .then(cars => {
      const randomCarsArr:iCars[] = [];
      while (randomCarsArr.length < n) {
        const randomIndex =  Math.floor(Math.random() * cars.length);
        if (cars[randomIndex].available && !randomCarsArr.includes(cars[randomIndex])) {
          randomCarsArr.push(cars[randomIndex])
        }
      }
      return randomCarsArr
    })
  }


  getAllLogo(){
    return this.getAllcars()
    .then( cars => {
      const logo:string[] = [];
      cars.map(car => {
        if (!logo.includes(car.brandLogo)) {
          logo.push(car.brandLogo)
        }
      })
      return logo
    })
  }
}






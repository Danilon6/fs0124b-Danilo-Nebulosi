import { Component } from '@angular/core';
import { CarsService } from '../../cars.service';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  carsArr:iCars[] = [];

  randomCarsArr:iCars[] = [];

  allLogoArr: string[] = [];

  carsIdArr:string[] =[];

  idRandom:string = "";

  constructor(private carSvc:CarsService){}

  ngOnInit():void{
    this.carSvc.getAllcars().then(cars => {
      for (let i = 0; i < cars.length; i++) {
        this.carsIdArr.push(cars[i].id)
      }
      return this.carsIdArr
    })
    .then(carsIdArr =>{
      const randomIndex =  Math.floor(Math.random() * carsIdArr.length);
        this.idRandom = carsIdArr[randomIndex]
    })
    this.carSvc.getAllLogo().then(loghi => this.allLogoArr = loghi)
    this.carSvc.getRandomAvailableCars(2).then(cars => this.randomCarsArr = cars)
  }
}

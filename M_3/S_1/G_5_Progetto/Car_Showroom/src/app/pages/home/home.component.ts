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
  constructor(private carSvc:CarsService){}

  ngOnInit():void{
    this.carSvc.getAllLogo().then(loghi => this.allLogoArr = loghi)
    this.carSvc.getAllcars().then(cars => this.carsArr = cars)
    this.carSvc.getRandomAvailableCars(2).then(cars => this.randomCarsArr = cars)
  }
}

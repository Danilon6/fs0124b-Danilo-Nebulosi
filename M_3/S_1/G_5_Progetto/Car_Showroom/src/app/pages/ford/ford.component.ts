import { Component } from '@angular/core';
import { CarsService } from '../../cars.service';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  carsArr:iCars[] = [];

  constructor(private carSvc:CarsService){}

  ngOnInit():void{
    this.carSvc.getAllcars().then(cars => cars.filter(cars => cars.brand == 'Ford'))
    .then(ford => this.carsArr = ford)
  }
}

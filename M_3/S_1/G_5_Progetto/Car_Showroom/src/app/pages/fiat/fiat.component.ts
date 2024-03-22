import { Component } from '@angular/core';
import { CarsService } from '../../cars.service';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {
  carsArr:iCars[] = [];

  constructor(private carSvc:CarsService){}

  ngOnInit():void{
    this.carSvc.getAllcars().then(cars => cars.filter(cars => cars.brand == 'Fiat'))
    .then(fiat => this.carsArr = fiat)
  }
}

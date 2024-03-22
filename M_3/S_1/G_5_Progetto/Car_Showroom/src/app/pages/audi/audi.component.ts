import { Component } from '@angular/core';
import { iCars } from '../../models/cars';
import { CarsService } from '../../cars.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  carsArr:iCars[] = [];

  constructor(private carSvc:CarsService){}

  ngOnInit():void{
    this.carSvc.getAllcars().then(cars => cars.filter(cars => cars.brand == 'Audi'))
    .then(ford => this.carsArr = ford)
  }
}

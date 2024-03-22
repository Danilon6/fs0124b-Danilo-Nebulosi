import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../cars.service';
import { iCars } from '../../models/cars';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

  carArr:iCars[] = [];

  constructor(private router:ActivatedRoute, private carSvc:CarsService){}


  ngOnInit(){

    this.router.params.subscribe((parametriDellaRotta:any) => {
      this.carSvc.getAllcars().then(cars => cars.filter(cars => cars.id == parametriDellaRotta.id))
      .then(car => this.carArr = car)
    })

  }
}

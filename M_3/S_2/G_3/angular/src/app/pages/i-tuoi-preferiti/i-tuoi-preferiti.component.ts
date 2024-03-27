import { DummyProductService } from './../../dummy-product.service';
import { Component } from '@angular/core';
import { iProduct } from '../../Models/dummy-products';

@Component({
  selector: 'app-i-tuoi-preferiti',
  templateUrl: './i-tuoi-preferiti.component.html',
  styleUrl: './i-tuoi-preferiti.component.scss'
})
export class ITuoiPreferitiComponent {
  likedProductArr:iProduct[] = []

  constructor(private dummySvc: DummyProductService) { }

  ngOnInit(){
    this.dummySvc.$product.subscribe(t => {
      console.log(t);
    })
  }
  add(product:iProduct){
    this.likedProductArr.push(product)
    console.log(product);

  }
}

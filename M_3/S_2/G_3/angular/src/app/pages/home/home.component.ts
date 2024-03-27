import { Component } from '@angular/core';
import { DummyProductService } from '../../dummy-product.service';
import { iProduct } from '../../Models/dummy-products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  productsArr:iProduct[] = []

  constructor(private dummySvc: DummyProductService) { }

  ngOnInit() {
    this.dummySvc.getAllProducts().subscribe(response => {
      this.productsArr = response.products
      console.log(response.products);
    })
  }
}

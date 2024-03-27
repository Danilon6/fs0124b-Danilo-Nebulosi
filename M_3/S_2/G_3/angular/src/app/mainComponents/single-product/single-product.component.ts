import { Subject } from 'rxjs';
import { iProduct } from './../../Models/dummy-products';
import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {

  @Output() onAddToLiked: EventEmitter<iProduct> = new EventEmitter()
  @Input() product!: iProduct

  subject = new Subject<iProduct>()

  $product = this.subject.asObservable()

  addToLiked(product: iProduct) {

    this.onAddToLiked.emit(product)
console.log(product);

  }
}

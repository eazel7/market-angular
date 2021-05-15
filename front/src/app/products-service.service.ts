import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  constructor() { }

  listProducts(): Product[] {
    return [{
      name: 'Cerrajería'
    }]
  }
}

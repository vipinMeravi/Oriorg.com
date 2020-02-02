import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../entities/item.entity';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product5',
  templateUrl: './product5.component.html',
  styleUrls: ['./product5.component.css']
})
export class Product5Component implements OnInit {
	private total1: number = 0;
  constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService) { }

  ngOnInit() {
				this.total1=this.productService.loadQuantity();
				this.productService.changeMessage(this.total1)
  }
  	    addToCart(id: string) {
			
			if (id) {
				var item: Item = {
					product: this.productService.find(id),
					quantity: 1
				};
				if (localStorage.getItem('cart') == null) {
					let cart: any = [];
					cart.push(JSON.stringify(item));
					localStorage.setItem('cart', JSON.stringify(cart));
				} else {
					let cart: any = JSON.parse(localStorage.getItem('cart'));
					let index: number = -1;
					for (var i = 0; i < cart.length; i++) {
						let item: Item = JSON.parse(cart[i]);
						if (item.product.id == id) {
							index = i;
							break;
						}
					}
					if (index == -1) {
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let item: Item = JSON.parse(cart[index]);
						item.quantity += 1;
						cart[index] = JSON.stringify(item);
						localStorage.setItem("cart", JSON.stringify(cart));
					}
				}
				this.total1=this.productService.loadQuantity();
				this.productService.changeMessage(this.total1)

			} else {

			}
		}


}

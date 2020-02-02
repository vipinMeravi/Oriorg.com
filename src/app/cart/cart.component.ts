import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';
@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	public items: Item[] = [];
	public subToatal: number = 0;
	public total: number = 0;
	public total1: number = 0;
	public ship: number;
	public res: number;
	public offer: number;
	public discountValue: number;
	constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }
	ngOnInit() {

		this.items = this.productService.loadCart();
		this.total = this.productService.loadPrice();
		this.discountValue = this.productService.loadDiscount();
		this.subToatal = this.total;
		this.total1 = this.productService.loadQuantity();
		this.productService.changeMessage(this.total1)
		this.productService.currentMessage.subscribe(message => this.total1 = message);
		this.total == 0 ? this.res = 0 : this.res = 1;
		if (this.total <= 500 && this.total != 0) {
			this.ship = 50;
		} else { 
			this.ship = 0; 
		}
		//offer aplicable on above 5 lit purchase.
		console.log("Discount value ",this.discountValue)
		if (this.discountValue >= 500) {
			this.offer = 1;
		} else { 
			this.offer = 0; 
		}
		if (this.total <= 500 && this.total != 0) {
				this.total += 50;
		}
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

			this.items = this.productService.loadCart();
			this.total = this.productService.loadPrice();
			this.discountValue = this.productService.loadDiscount();
			this.subToatal = this.total;
			this.total1 = this.productService.loadQuantity();
			this.productService.changeMessage(this.total1)
			this.total == 0 ? this.res = 0 : this.res = 1;
			if (this.total <= 500 && this.total != 0) {
				this.ship = 50;
			} else { 
				this.ship = 0; 
			}
			//offer aplicable on above 5 lit purchase.
			if (this.discountValue >= 500) {
				this.offer = 1;
			} else { 
				this.offer = 0; 
			}
			if (this.total <= 500 && this.total != 0) {
					this.total += 50;
			}
		} else {
			this.items = this.productService.loadCart();
			this.subToatal = this.total;
			this.total = this.productService.loadPrice();
			this.total1 = this.productService.loadQuantity();
			this.productService.changeMessage(this.total1)

		}
	}
	deleteToCart(id: string) {

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
					item.quantity -= 1;
					cart[index] = JSON.stringify(item);
					if (item.quantity == 0) {
						let index: number = -1;
						for (var i = 0; i < cart.length; i++) {
							let item: Item = JSON.parse(cart[i]);
							if (item.product.id == id) {
								cart.splice(i, 1);
								break;
							}
						}
						localStorage.setItem("cart", JSON.stringify(cart));

					}

					console.log(JSON.stringify(cart));
					localStorage.setItem("cart", JSON.stringify(cart));
				}
			}
			this.items = this.productService.loadCart();
			this.total = this.productService.loadPrice();
			this.discountValue = this.productService.loadDiscount();
			this.subToatal = this.total;
			this.total1 = this.productService.loadQuantity();
			this.productService.changeMessage(this.total1)
			this.total == 0 ? this.res = 0 : this.res = 1;
			if (this.total <= 500 && this.total != 0) {
				this.ship = 50;
			} else { 
				this.ship = 0; 
			}
			//offer aplicable on above 5 lit purchase.
			if (this.discountValue >= 500) {
				this.offer = 1;
			} else { 
				this.offer = 0; 
			}
			if (this.total <= 500 && this.total != 0) {
					this.total += 50;
			}
		} else {
			this.items = this.productService.loadCart();
			this.total = this.productService.loadPrice();
			this.subToatal = this.total;
			this.total1 = this.productService.loadQuantity();
			this.productService.changeMessage(this.total1)
		}
	}
	remove(id: string): void {

		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product.id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));

		this.items = this.productService.loadCart();
		this.total = this.productService.loadPrice();
		this.discountValue = this.productService.loadDiscount();
		this.subToatal = this.total;
		this.total1 = this.productService.loadQuantity();
		this.productService.changeMessage(this.total1)
	}
}

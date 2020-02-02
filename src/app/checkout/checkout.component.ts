import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
	output="";
  	public items: Item[] = [];
	public total: number = 0;
	public ship: number;
	public subToatal : number =0;
	public nm;
	public address1;
	public address2;
	public pincode;
	public phone;
	public alterPhone;
	public email;
	


  constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService,
		private http: HttpClient
) { }

  ngOnInit() {
		this.total=this.productService.loadPrice();
		this.subToatal=this.total;
		if(this.total<=500 && this.total!=0){
			this.ship=50;
		}else{this.ship=0;}
		if(this.total<=500){
			if(this.total!=0){
				this.total+=50
				
			} 
		}else{

		}
  }
  ChangingValue(val){
	
	console.log('inside Changing Value ----  ',val);
  }
  onClickSubmit(userDetails)
  {
	var txn_amount=this.total;
	var productDetails = localStorage.getItem('cart');
	var shippingDetails = JSON.stringify(userDetails);
	console.log(shippingDetails);
	window.location.href="https://www.oriorg.com/testtxn?productDetails="+productDetails+"&shippingDetails="+shippingDetails;
	// window.location.href="http://localhost:3000/testtxn?productDetails="+productDetails+"&shippingDetails="+shippingDetails;
  }

}

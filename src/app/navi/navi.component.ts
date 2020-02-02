import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
	public total1: number = 0;
message: number;
  constructor(	private productService: ProductService ) { }

  ngOnInit() {
	this.productService.currentMessage.subscribe(message => this.total1 = message);
				this.total1=this.productService.loadQuantity();
				this.productService.changeMessage(this.total1)
  }
}


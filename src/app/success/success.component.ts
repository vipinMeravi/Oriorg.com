import { Component, OnInit } from '@angular/core';
import { SuccessService } from '../success.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
	public orderId
	public cusId
	public nm
	public amt
	public address
	public phone
	public email
	public items
	public status
	public status_msg
	public res: number;

  constructor( private successService:SuccessService ,private activatedRoute: ActivatedRoute,private http:HttpClient
		,private productService: ProductService) { }

  ngOnInit() {
	this.productService.changeMessage(0);
	this.activatedRoute.queryParams.subscribe(params => {
	this.orderId = params['oid'],
	this.cusId = params['cid'],
	this.amt = params['amt'],
	this.nm = params['nm'],
	this.phone = params['phone'],
	this.email = params['email'],
	this.address = params['add']
	this.status = params['status'],
	this.status_msg = params['status_msg']
	this.items = JSON.parse(params['items'])
	this.nm==null?this.res=0:this.res=1;
      });
	localStorage.removeItem('cart');

	
  }


}







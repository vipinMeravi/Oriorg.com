import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
	public order_Id
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
  constructor(private http:HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
this.activatedRoute.queryParams.subscribe(params => {
	this.orderId = params['oid'],
	this.cusId = params['cid'],
	this.amt = params['amt'],
	this.nm = params['nm'],
	this.phone = params['phone'],
	this.email = params['email'],
	this.address = params['add'],
	this.status = params['status'],
	this.status_msg = params['status_msg']
	this.items = JSON.parse(params['items'])
      });
	this.nm==null?this.res=0:this.res=1;

  }

  onClickSubmit(orderId)
  {
	window.location.href="https://www.oriorg.com/successUser?oid="+this.order_Id;
	// window.location.href="http://localhost:3000/successUser?oid="+this.order_Id;
  }

}

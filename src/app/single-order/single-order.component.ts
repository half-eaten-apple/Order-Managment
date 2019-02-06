import { Component, OnInit } from '@angular/core';
import { SingleOrderServicesService } from '../single-order-services.service';


@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  increment: number = 0;
  Information: any;

  constructor(private getSingleOrderService: SingleOrderServicesService) {

  }

  ngOnInit() {
    // this.getSingleOrderService.getDetailsVal().subscribe(data => this.Information = data);
  }

  singleOrderDetails() {
    this.getSingleOrderService.getDetailsVal().subscribe
      (data => {
        this.Information = data;
        //this.Information = JSON.stringify(this.Information);
        //alert(this.Information);
      })
     
  }
  // singleOrderDetails() {
  //   this.getSingleOrderService.getDetailsVal().subscribe(data => {
  //     this.Information = data;
  //     console.log('data' + this.Information);
  //   },
  //     error => {
  //       console.log(error);
  //     });
  // }

}

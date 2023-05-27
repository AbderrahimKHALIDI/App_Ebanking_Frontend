import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CustomerService} from "../services/customer.service";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers!:Observable<Array<Customer>>;
  errorMessage!:object;
  constructor(private customerService:CustomerService) {
  }
  ngOnInit() {
    this.customers=this.customerService.getCustomers();

  }

}

import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CustomerService} from "../services/customer.service";
import {catchError, Observable, throwError} from "rxjs";
import {Customer} from "../model/customer.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit{
  customers!:Observable<Array<Customer>>;
  errorMessage!:object;
  searchformGroup!:FormGroup | undefined;

  constructor(private customerService:CustomerService, private fb:FormBuilder) {
  }
  ngOnInit() {

    this.searchformGroup=this.fb.group({
      keyword : this.fb.control("")
    });
    this.customers=this.customerService.getCustomers().pipe(
      catchError(err=>{
        this.errorMessage=err.message;
        return throwError(err);
      })
    );

  }


  handleSearchCustomers() {

  }
}

import { CustomerService } from "./../customer.service";
import { Component, OnInit } from "@angular/core";
import { Customer } from "../customer.model";

@Component({
  selector: "app-list-customer",
  templateUrl: "./list-customer.component.html",
  styleUrls: ["./list-customer.component.css"]
})
export class ListCustomerComponent implements OnInit {
  deletedCustomerId: string;
  counter: string;
  customers: Customer[];
  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.GetCustomersFromService();
  }

  GetCustomersFromService() {
    this.customerService.GetCustomerList().subscribe(resp => {
      this.customers = resp as Customer[];
      this.counter = `Showing ${this.customers.length} Customers.`;
    });
  }

  deleteCustomer() {
    this.customerService
      .DeleteCustomer(this.deletedCustomerId)
      .subscribe(resp => {
        this.GetCustomersFromService();
      });
  }

  displayDeleteForm(custid) {
    this.deletedCustomerId = custid;
  }
}

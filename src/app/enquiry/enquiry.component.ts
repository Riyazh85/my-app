import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {
  ModelData: Object;
  constructor() {
    this.ModelData = {
      source: {
        type: 'olx',
        value: 'sdsds'
      },
      personalDetails: {
        name: '',
        mobile: '',
        mobile1: '',
        landline: '',
        email: '',
        address: ''
      },
      vehicleDetails: {
        vehicleType: '',
        make: '',
        model: '',
        variant: '',
        fuel: '',
        budget: '',
        year: '',
      },
      paymentDetails: {
        payment: '',
        paymentType: '',
        paymentDetails: ''
      },
      exchangeDetails: {
        exchangeVehicle: 'yes',
        make: '',
        model: '',
        variant: '',
        fuel: '',
        expectedprice: '',
        mileage: '',
        year: '',
        comments: ''

      },
      otherDetails: {}
    }
  }

  ngOnInit() {
    $(function () {
      $('.date').datepicker({
        format: "yyyy",
        viewMode: "years",
        minViewMode: "years"
      });
    });
  }

  public saveEnquiry() {
    console.log("data", JSON.stringify(this.ModelData));
  }

}

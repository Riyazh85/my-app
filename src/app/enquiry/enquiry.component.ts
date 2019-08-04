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
        mobile: ''
      },
      vehicleDetails: {},
      paymentDetails: {},
      exchangeDetails: {
        exchangeVehicle: 'yes'
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

}

import { Component, OnInit } from '@angular/core';
import { APIcallService } from '../apicall.service';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  v :any;
  w = false;
  w1: boolean;
  pageObser: Observable<any[]>;
  dataSource: any;

  pageObser1: Observable<any[]>;
  dataSource1: any;


  pageObser2: Observable<any[]>;
  dataSource2: any;

  pageObser3: Observable<any[]>;
  dataSource3: any;

  lat = 45;
  lng = 14;

  visible = false;

  id: any;
  data: any;
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    grower: new FormControl(''),
    trader: new FormControl(''),
    PL_Invoice_no: new FormControl(''),
    PL_IssueDate: new FormControl(''),
    PL_ICO_no: new FormControl(''),
    PL_ICO_Lot: new FormControl(''),
    PL_FDA_NO: new FormControl(''),
    PL_Bill_of_Lading_No: new FormControl(''),
    PL_LoadedVessel: new FormControl(''),
    PL_VesselVoyage_No: new FormControl(''),
    PL_Container_No: new FormControl(''),
    PL_Seal_no: new FormControl(''),
    PL_timestamp: new FormControl(''),
    batchId: new FormControl(''),
    transactionId: new FormControl(''),
    timestamp: new FormControl(''),
  });
  profileForm1 = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
    organization: new FormControl(''),
    address: new FormControl(''),
    $class: new FormControl(''),
    Id: new FormControl(''),

  });
  constructor(private api: APIcallService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.pageObser = this.api.getdata();
    this.pageObser1 = this.api.getdata1();
    this.pageObser2 = this.api.getdata2();
    this.pageObser3 = this.api.getblockchain();

   // this.api.contract();
    this.hello();
  }
  hello() {

    this.pageObser.subscribe(res => {

      this.dataSource = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource);
      });


    this.pageObser1.subscribe(res => {

      this.dataSource1 = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource1);
      this.st();
      });

    this.pageObser2.subscribe(res => {

      this.dataSource2 = res;
      console.log(this.dataSource2);
      // this.login();

      });

    this.pageObser3.subscribe(res => {

      this.dataSource3 = res;
      console.log(this.dataSource3);
      this.login();

      });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
    this.w = false;


    // let v = {};
    this.dataSource2.forEach(element => {

      // this.v[element.email] = {status: false};
      console.log(element.name);

      this.api.addItem(this.profileForm.value, element.name, {status: false , name: element.name});

    });

    const objectC = {...this.profileForm.value, ...this.v};

  }

  onSubmit1() {
    // TODO: Use EventEmitter with form value
    if (this.profileForm1.value.$class === 'Grower') {

      this.profileForm1.value.growerId = this.profileForm1.value.$class + '-' + this.profileForm1.value.Id;
      this.profileForm1.value.$class = 'org.ibm.coffee.' + this.profileForm1.value.$class;

      const l = {
        $class: this.profileForm1.value.$class,
        growerId: this.profileForm1.value.growerId,
        organization: this.profileForm1.value.organization,
        address: this.profileForm1.value.address
      };

      this.api.growerdata(l);
      console.log(l);
      this.w = false;
      this.api.addItem1(this.profileForm1.value);
      this.profileForm1.reset();
      this.snackBar.open('Success', 'ok', {
        duration: 2000,
      });

    }

    if (this.profileForm1.value.$class === 'Trader') {

      this.profileForm1.value.traderId = this.profileForm1.value.$class + '-' + this.profileForm1.value.Id;
      this.profileForm1.value.$class = 'org.ibm.coffee.' + this.profileForm1.value.$class;

      const l = {
        $class: this.profileForm1.value.$class,
        traderId: this.profileForm1.value.traderId,
        organization: this.profileForm1.value.organization,
        address: this.profileForm1.value.address
      };

      this.api.traderdata(l);
      console.log(l);
      this.w = false;
      this.api.addItem1(this.profileForm1.value);
      this.profileForm1.reset();
      this.snackBar.open('Success', 'ok', {
        duration: 2000,
      });

    }

    if (this.profileForm1.value.$class === 'Shipper') {

      this.profileForm1.value.shipperId = this.profileForm1.value.$class + '-' + this.profileForm1.value.Id;
      this.profileForm1.value.$class = 'org.ibm.coffee.' + this.profileForm1.value.$class;

      const l = {
        $class: this.profileForm1.value.$class,
        shipperId: this.profileForm1.value.shipperId,
        organization: this.profileForm1.value.organization,
        address: this.profileForm1.value.address
      };

      this.api.shipperdata(l);
      console.log(l);
      this.w = false;
      this.api.addItem1(this.profileForm1.value);
      this.profileForm1.reset();
      this.snackBar.open('Success', 'ok', {
        duration: 2000,
      });

    }

    if (this.profileForm1.value.$class === 'Retailer') {

      this.profileForm1.value.retailerId = this.profileForm1.value.$class + '-' + this.profileForm1.value.Id;
      this.profileForm1.value.$class = 'org.ibm.coffee.' + this.profileForm1.value.$class;

      const l = {
        $class: this.profileForm1.value.$class,
        retailerId: this.profileForm1.value.retailerId,
        organization: this.profileForm1.value.organization,
        address: this.profileForm1.value.address
      };

      this.api.retailerdata(l);
      console.log(l);
      this.w = false;
      this.api.addItem1(this.profileForm1.value);
      this.profileForm1.reset();
      this.snackBar.open('Success', 'ok', {
        duration: 2000,
      });

    }

  }

  login() {

    // this.dataSource2.forEach(element => {
    //   if(element.id === 'a' && element.pass === 'a') {

    //     console.log('wellcone to ww');
    //   }

    // });

    let v = 0;
    this.dataSource3.forEach(element => {
      v++;

    });

    console.log(this.dataSource3[(v - 1)].Key);
  }

  st(){

    this.v = 1;

    this.dataSource1.forEach(element => {
      console.log(element.status)
      if(!element.status){
        this.v = 0;
        return;
      }


    });

    // console.log(this.v)
  }


  wait(item) {

    this.w = false;
    console.log(item );
    // this.api.addItem({name: 'name'} );

  }

  mapdisplay() {

    setInterval(() => {

    this.lat = this.lat + 0.1;
    this.lng = this.lng + 0.1;
         }, 10000);

    this.visible = true;

    // console.log(data);

  }

}

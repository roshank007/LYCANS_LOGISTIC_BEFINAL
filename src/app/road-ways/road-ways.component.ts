import { Component, OnInit } from '@angular/core';
import { APIcallService } from '../apicall.service';
import { Observable } from 'rxjs';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';




@Component({
  selector: 'app-road-ways',
  templateUrl: './road-ways.component.html',
  styleUrls: ['./road-ways.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s ease-out', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})


export class RoadWaysComponent implements OnInit {

  constructor(private api: APIcallService,private snackBar: MatSnackBar) { }

  lat = 45;
  lng = 14;

  visible = false;
  type1 = 'hello';

  profileForm1 = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
    type: new FormControl('')
  });

  profileForm = new FormGroup({
    size: new FormControl(''),
    roast: new FormControl(''),
    batchState: new FormControl(''),
    grower: new FormControl(''),
    transactionId: new FormControl(''),
    timestamp: new FormControl(''),

  });

  trader = new FormGroup({
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


  retailer = new FormGroup({
    dateStripped: new FormControl(''),
    marks: new FormControl(''),
    bagsExpected: new FormControl(''),
    condition: new FormControl(''),
    insectActivity: new FormControl(''),
    batchId: new FormControl(''),
    transactionId: new FormControl(''),
    timestamp: new FormControl(''),
  });

  // items = [];
  pageObser: Observable<any[]>;
  dataSource: any;

  pageObser1: Observable<any[]>;
  dataSource1: any;


  pageObser2: Observable<any[]>;
  dataSource2: any;

  t = true;
  name: any;

  ngOnInit() {
    this.pageObser = this.api.getdata();
    this.pageObser1 = this.api.getdata1();
    this.pageObser2 = this.api.getdata2();

    this.showItems();
  }

  showItems() {
    this.pageObser.subscribe(res => {

      this.dataSource = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource);
      });


    this.pageObser1.subscribe(res => {

      this.dataSource1 = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource1);
      });

    this.pageObser2.subscribe(res => {

      this.dataSource2 = res;
      // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource2);
      });
  }

  onSubmit1() {
    // TODO: Use EventEmitter with form value

    // const d = this.dataSource2.filter(item => item.email === this.profileForm1.value.email && item.pass === this.profileForm1.value.pass);

    this.dataSource2.forEach(item => {

      if(item.email === this.profileForm1.value.email && item.pass === this.profileForm1.value.pass) {
        this.name = item.name;
        console.log(item);
        this.t = false;
        this.type1 = this.profileForm1.value.type;
        console.log(this.type1);
        return;
      }
    });
    if(this.t){
      console.log('sorry no user');
      this.snackBar.open('sorry no user', 'ok', {
        duration: 2000,
      });
    }
  }

  hideItems() {
    this.dataSource = [];
  }

  wait1(item) {

    this.api.updateTask(this.name + item, {status: true});

  }

  mapdisplay() {

    setInterval(() => {

    this.lat = this.lat + 0.1;
    this.lng = this.lng + 0.1;
         }, 10000);

    this.visible = true;

    // console.log(data);

  }

  onSubmit() {

    console.log(this.profileForm.value);

    this.api.addcoffee(this.profileForm.value);


  }

  trader1() {

    console.log(this.trader.value);

    this.api.traderdata(this.trader.value);


  }

  retailer1() {

    console.log(this.retailer.value);

    this.api.retailerdata(this.retailer.value);


  }
}

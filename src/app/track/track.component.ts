import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIcallService } from '../apicall.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {

  constructor(private api: APIcallService) { }

  pageObser3: Observable<any[]>;
  dataSource3: any;

  grower: any;
  trader: any;
  gadd: any;
  tadd: any;
  gorg: any;
  torg: any;
  ve = false;
  tempdata: any;
  st: any;
  st1: any;


  profileForm = new FormGroup({
    email: new FormControl('')
  });


  ngOnInit() {


  }
  hello() {

    console.log(this.profileForm.value);
    this.pageObser3 = this.api.getblockchain1(this.profileForm.value.email);

    this.pageObser3.subscribe(res => {

      this.dataSource3 = res;
      this.tempdata = this.dataSource3.flavor;
      this.st = this.dataSource3.afterTaste;
      this.st1 = this.dataSource3.acidity;
     // this.dataSource = this.dataSource.filteredData;
      var s = this.dataSource3.grower;
      var s1 = s.toString(s).substring(s.indexOf('#') + 1);

      this.api.getblockchain1(s1).subscribe(e => {
        this.grower = s1;
        this.gadd = e.address;
        this.gorg = e.organization;
        console.log(this.grower, this.gadd, this.gorg);
      });

      var s2 = this.dataSource3.trader;
      var s3 = s2.toString(s2).substring(s2.indexOf('#') + 1);

      this.api.getblockchain1(s3).subscribe(e => {
        this.trader = s3;
        this.tadd = e.address;
        this.torg = e.organization;
        console.log(this.trader, this.tadd, this.torg);
      });


      console.log(this.dataSource3);
      });

    //this.showItems();

    }

    alldata() {
      this.ve = true;
    }
}

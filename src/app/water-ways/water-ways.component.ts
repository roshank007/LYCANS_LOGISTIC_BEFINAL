import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { APIcallService } from '../apicall.service';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-water-ways',
  templateUrl: './water-ways.component.html',
  styleUrls: ['./water-ways.component.scss'],
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
export class WaterWaysComponent implements OnInit {

  profileForm1 = new FormGroup({
    to: new FormControl(''),
    from: new FormControl(''),
    toIoT: new FormControl(''),
    fromIoT: new FormControl(''),
    batchId: new FormControl('')

  });
  constructor(private api: APIcallService, private httpClient: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {


  }

  onSubmit1() {

    console.log(this.profileForm1.value);
    let v = {
      dateStripped: '2017-10-06T00:00:00.000Z',
      marks: '010/0150/0128 Lot 7',
      bagsExpected: '1500',
      condition: 'good',
      insectActivity: 'none',
      batchId: this.profileForm1.value.batchId,
      transactionId: 'cdcf476897109c6470e476eac2b90c05c223e64681311b2fabbb175f26ac8c8b',
      timestamp: '2018-07-18T02:10:29.097Z'
    }
    this.httpClient.post('http://localhost:3000/submitInboundWeightTally', v).subscribe(s => {


      this.profileForm1.reset();
      this.snackBar.open('Success', 'ok', {
        duration: 2000,
      });

    })
  }

  demo() {


    const myDate = new Date();
    let v = {
      cupper: 'Brian',
      aroma: '9',
      flavor: this.profileForm1.value.from,
      afterTaste: 'Is Critical for at 30 degree should be 20 degree',
      acidity: '8',
      body: '9',
      finalScore: '89',
      batchId: this.profileForm1.value.batchId,
      transactionId: 'cdcf476897109c6470e476eac2b90c05c223e64681311b2fabbb175f26ac8c8b',
      timestamp: myDate
    }
    this.httpClient.post('http://localhost:3000/submitCupping', v).subscribe(s => {


      this.httpClient.get('http://localhost:5000/send').subscribe(s => {

        this.profileForm1.reset();
        this.snackBar.open('Success', 'ok', {
        duration: 2000,
      });
    });

    });
  }

  demo1() {

    const myDate = new Date();


    let v = {
      cupper: 'Brian',
      aroma: '9',
      flavor: this.profileForm1.value.from,
      afterTaste: 'Is Critical for at 30 degree should be 20 degree',
      acidity: 'Was Critical for 10 min at 30 degree',
      body: myDate,
      finalScore: '89',
      batchId: this.profileForm1.value.batchId,
      transactionId: 'cdcf476897109c6470e476eac2b90c05c223e64681311b2fabbb175f26ac8c8b',
      timestamp: '2018-07-18T02:10:29.097Z'
    }
    this.httpClient.post('http://localhost:3000/submitCupping', v).subscribe(s => {


      this.httpClient.get('http://localhost:5000/send').subscribe(s => {

        this.profileForm1.reset();
        this.snackBar.open('Success', 'ok', {
        duration: 2000,
      });
    });

    });
  }

}

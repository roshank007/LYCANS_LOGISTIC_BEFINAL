import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { Observable } from 'rxjs';
import { APIcallService } from '../apicall.service';


@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss'],
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
export class BlockchainComponent implements OnInit {

  constructor(private api: APIcallService) { }

  pageObser3: Observable<any[]>;
  dataSource3: any;


  items: any;
  ngOnInit() {

    this.pageObser3 = this.api.getblockchain();
    this.hello();
  }
  hello() {

    this.pageObser3.subscribe(res => {

      this.dataSource3 = res;
     // this.dataSource = this.dataSource.filteredData;
      console.log(this.dataSource3);
      });

    //this.showItems();

    }

}


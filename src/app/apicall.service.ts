import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  HttpClient,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIcallService {
  private itemsCollection: AngularFirestoreCollection<any>;
  private itemsCollection1: AngularFirestoreCollection<any>;
  private itemsCollection2: AngularFirestoreCollection<any>;
  private query: AngularFirestoreCollection<any>;

  items: Observable<any>;
  items1: Observable<any>;
  items2: Observable<any>;
  query1: Observable<any>;

  blockchaindata: Observable<any>;

  private taskDoc: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore, private httpClient: HttpClient) {
    this.itemsCollection = this.afs.collection<any>('items');
    this.items = this.itemsCollection.valueChanges();

    this.itemsCollection1 = this.afs.collection<any>('org');
    this.items1 = this.itemsCollection1.valueChanges();

    this.itemsCollection2 = this.afs.collection<any>('orgnames');
    this.items2 = this.itemsCollection1.valueChanges();

    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );

    this.items1 = this.itemsCollection1.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );

    this.items2 = this.itemsCollection2.snapshotChanges().pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );

    this.sendnotification();
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  //   public getblockchain(){

  //     console.log(this.httpClient.get('http://localhost:3000/blockchain'));

  // }

  sendnotification() {

    setInterval(() => {

      this.httpClient.get('http://localhost:5000/').subscribe(r=>{
        if (1025 < parseInt(r.toString())) {

          console.log(r);

        }
      });
      console.log('helloooooo');

    }, 10000);
    // console.log(data);

  }

  public getblockchain(): Observable<any> {
    return this.httpClient
      .get('http://localhost:3000/blockchain')
      .pipe(map(this.extractData));
  }

  public getblockchain1(id): Observable<any> {
    return this.httpClient.get('http://localhost:3000/blockchain/' + id);
  }

  public batchId(){

  }

  public addcoffee(data1) {
    this.httpClient.post('http://localhost:3000/addCoffee', data1).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  public traderdata(data1) {
    this.httpClient.post('http://localhost:3000/trader', data1).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  public shipperdata(data1) {
    this.httpClient.post('http://localhost:3000/Shipper', data1).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  public growerdata(data1) {
    // this.httpClient.post('http://localhost:3000/Grower', data1).subscribe(
    //   data => {
    //     console.log('POST Request is successful ', data);
    //   },
    //   error => {
    //     console.log('Error', error);
    //   }
    // );
  }

  public retailerdata(data1) {
    this.httpClient.post('http://localhost:3000/Retailer', data1).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

  public addItem(item: any, id: any, status: any) {
    this.itemsCollection.doc(item.firstName).set(item);
    this.itemsCollection1 = this.afs.collection<any>('org');
    this.itemsCollection1.doc(id + item.firstName).set(status);
    // this.itemsCollection1.doc(id + item.firstName).set(name);
    // this.itemsCollection1.doc('roadways' + item.firstName).set(status);
  }

  public addItem1(item: any) {
    // this.itemsCollection.doc('orgnames').set(item);
    // this.itemsCollection2 = this.afs.collection<any>('orgnames');
    this.itemsCollection2.doc(item.email).set(item);
    // this.itemsCollection1.doc('roadways' + item.firstName).set(status);
  }

  getdata(): Observable<any> {
    console.log(this.items);

    // this.itemsCollection.doc(s.id).update({name: 'name12'})

    // this.itemsCollection = this.afs.collection<any>('items');
    return this.items;
  }

  getdata1(): Observable<any> {
    // this.itemsCollection.doc(s.id).update({name: 'name12'})

    // this.itemsCollection = this.afs.collection<any>('items');
    return this.items1;
  }

  getdata2(): Observable<any> {
    // this.itemsCollection.doc(s.id).update({name: 'name12'})

    // this.itemsCollection = this.afs.collection<any>('items');
    return this.items2;
  }

  public updateTask(id, update) {
    this.taskDoc = this.itemsCollection1.doc<any>(id);

    this.taskDoc.update(update);
  }
}

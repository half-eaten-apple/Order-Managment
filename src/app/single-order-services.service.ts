import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SingleOrderList} from './singleOrderList';


@Injectable()

export class SingleOrderServicesService {
  constructor(private http: HttpClient) {

  }

  getDetailsVal()
  {
    return this.http.get<any>( 'http://192.168.1.98:4200/assets/data/SingleOrderDetails.json');
  }
}


// import {Injectable} from '@angular/core'
// import { Observable} from 'rxjs';
// import { map } from 'rxjs/operators';
// import { Http } from "@angular/http";

// @Injectable()
// export class SingleOrderServicesService {

//   constructor(private http: Http) { }

//   getDetailsVal(){
//   // return this.http.get( '192.168.1.98:4200/assets/data/SingleOrderDetails.json' ).pipe(map(
//   //     (res:Response) => res.json()
//   //   ))
//   //   .pipe(catchError(
//   //     (error:Response|any)=>error.json()
//   //   ));

//     return this.http.get('http://192.168.1.98:4200/assets/data/SingleOrderDetails.json')
//     .pipe(map(response => response.json()));

//   }
// }

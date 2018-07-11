import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()

export class MainService {
    constructor(private http:Http) {
    }

    getData = (): Observable<Response> => {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=40445f285117493baf3fcb52367eb5fc').map(res => res.json());
    }
}

import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

    constructor(public http:Http) {

    }

    getPosts() {
        return this.http
        .get('https://jsonplaceholder.typicode.com/users')
        .map(res => res.json())
        .catch(this.handleError);
    }

    public handleError(error: Response) {
        // throw an error which can cath from subscriber 
        return Observable.throw(error);
    }

}

import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';

@Injectable()
export class WikipediaService {

    headers: Headers;

    constructor(private http: Http) {

        this.headers = new Headers();
        this.headers.append("Access-Control-Allow-Origin", "*");
    }

    search(term: string) {

        if (term === '') {
            return Observable.of([]);
        }

        let wikiUrl = 'http://lyricsmeapi.site/api/search';
        let params = new URLSearchParams();
        params.set('q', term);
        params.set('type', 'opensearch');
        //params.set('format', 'json');
        //params.set('callback', 'JSONP_CALLBACK');

        return this.http
            .get(wikiUrl, {search: params, headers: this.headers})
            .map(response => <string[]> response.json()[1]);
    }
}

@Component({
    selector: 'app-root',
    templateUrl: './search.component.html',
    providers: [WikipediaService]
})

export class SearchComponent implements OnInit {

    model: any;
    searching = false;
    searchFailed = false;
    hideSearchingWhenUnsubscribed = new Observable(() => () => this.searching = false);

    ngOnInit() {
    }

    constructor(private _service: WikipediaService) {}

    search = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .do(() => this.searching = true)
      .switchMap(term =>
        this._service.search(term)
          .do(() => this.searchFailed = false)
          .catch(() => {
            this.searchFailed = true;
            return Observable.of([]);
          }))
      .do(() => this.searching = false)
      .merge(this.hideSearchingWhenUnsubscribed);

}

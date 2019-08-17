import { Component, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, tap, switchMap } from 'rxjs/operators';

const WIKI_URL = 'https://en.wikipedia.org/w/api.php';

@Injectable()
export class WikipediaService {
    constructor(private http: Http) { }

    search(term: string) {
        if (term === '') {
            return of([]);
        }

        return this.http.get(WIKI_URL, { params: { action: 'opensearch', format: 'json', origin: '*', search: term } }).pipe(map(response => response[1]));
    }
}

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    providers: [WikipediaService],
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    model: any;
    searching = false;
    searchFailed = false;

    constructor(private _service: WikipediaService) { }

    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => this.searching = true),
            switchMap(term =>
                this._service.search(term).pipe(
                    tap(() => this.searchFailed = false),
                    catchError(() => {
                        this.searchFailed = true;
                        return of([]);
                    }))
            ),
            tap(() => this.searching = false)
        )
}
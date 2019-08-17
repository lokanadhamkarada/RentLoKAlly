import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Injectable({
    providedIn: 'root'
})

export class BaseService {
    constructor(public http: Http) { }

    protected baseUrl(): string {
        return "http://localhost:50057/";
    }

    protected get(url) {
        let promise = new Promise((resolve, reject) => {
            try {
                let headerOptions = new Headers({ 'Content-Type': 'application/json' });
                let requestOptions = new RequestOptions({ method: RequestMethod.Get, headers: headerOptions });

                this.http.get(url, requestOptions)
                    .toPromise()
                    .then(
                        res => {
                            resolve(res.json());
                        },
                        msg => {
                            reject(Error('Error tring get : ' + msg));
                        });
            }
            catch (Error) {
                reject(Error());
            }
        });

        return promise;
    }

    protected post(url, item) {
        let promise = new Promise((resolve, reject) => {
            try {
                let body = JSON.stringify(item);
                let headerOptions = new Headers({ 'Content-Type': 'application/json' });
                let requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });

                this.http.post(url, body, requestOptions)
                    .toPromise()
                    .then(
                        res => {
                            resolve(res.json());
                        },
                        msg => {
                            reject(Error('Error trying post : ' + msg));
                        }
                    );
            }
            catch (Error) {
                reject(Error());
            }
        });

        return promise;
    }
}
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BaseService } from './base.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UsersService extends BaseService {
    private usersUrl: string = "api/users";

    constructor(public http: Http) {
        super(http);
    }

    getUsers() {
        return super.get(super.baseUrl() + this.usersUrl);
    }

    postUser(item) {
        return super.post(super.baseUrl() + this.usersUrl, item);
    }
}
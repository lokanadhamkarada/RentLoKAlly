import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    @Input() user: User = new User();

    constructor(private usersService: UsersService) { }

    ngOnInit() {
    }

    validateUser() {
        
    }
}
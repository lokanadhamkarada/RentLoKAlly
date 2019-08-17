import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    @Input() user: User = new User();

    constructor(private usersService: UsersService) { }

    ngOnInit() {
    }

    postUser() {
        this.usersService.postUser(this.user).then((resp) => {
            this.user = new User();
        });
    }
}
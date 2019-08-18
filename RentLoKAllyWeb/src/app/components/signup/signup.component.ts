import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { ModalService } from './../../services/modal.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
    @Input() user: User = new User();

    constructor(private usersService: UsersService,private modalService: ModalService) { }

    ngOnInit() {
    }
    openModal(id: string) {
        this.modalService.open(id);
    }
  
    closeModal(id: string) {
        this.modalService.close(id);
    }
    postUser() {
        this.usersService.postUser(this.user).then((resp) => {
            this.user = new User();
        });
    }
}
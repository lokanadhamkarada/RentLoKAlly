import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { ModalService } from './../../services/modal.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    @Input() user: User = new User();

    constructor(private usersService: UsersService, private router: Router, private modalService: ModalService) { }


    ngOnInit() {
    }
    openModal(id: string) {
      this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }
    validateUser() {
        this.usersService.getUsers().then((resp) => {
            let users = resp as User[];

            if (users != undefined && users != null && users.length > 0) {
                let existingUser = users.find(u => u.UserName == this.user.UserName && u.Password == this.user.Password);

                if (existingUser != undefined && existingUser != null) {
                    this.router.navigate(['/search']);
                }
            }
        });
    }
}

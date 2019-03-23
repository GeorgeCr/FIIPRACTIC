import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent implements OnInit {
  account = {
    email: '',
    nume: '',
    prenume: '',
    phone: '',
    linkedin: '',
    school: '',
    address: ''
  }
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.accountService.getUser().subscribe(data => {
      this.account = data[8];
    });
  }

  onSubmit(form) {
    this.account = {
      email: form.value.email,
      nume: form.value.nume,
      prenume: form.value.prenume,
      phone: form.value.phone,
      linkedin: form.value.linkedin,
      school: form.value.school,
      address: form.value.address
    };

    this.accountService.updateUser(this.account).subscribe(data => {
      console.log(data);
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('https://fiipractic-project.firebaseio.com/users.json');
  }

  updateUser(updatedUser) {
    return this.http.put('https://fiipractic-project.firebaseio.com/users/8.json', updatedUser);
  }
}

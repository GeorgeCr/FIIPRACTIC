import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AriasService {
  ariaCategory: any;
  constructor(private http: HttpClient) { }

  getArias() {
    return this.http.get('https://fiipractic-project.firebaseio.com/arias.json');
  }
  setAriaCategory(ariaCategory) {
    this.ariaCategory = ariaCategory;
  }
  getAriaCategory() {
    return this.ariaCategory;
  }
}

import { Injectable } from '@angular/core';
import { PresentationDetails } from '../interfaces/presentation-details';

@Injectable({
  providedIn: 'root'
})
export class PresentationDetailsService {

  constructor() { }

  getPresentationDetails(): PresentationDetails {
    return {
      startDate: '9 Martie',
      endDate: '31 Martie',
      title: 'FII Practic 2019',
      description: 'FII Practic este provocare adusă vouă, atât elevi și studenți, cât și persoane din mediul corporatist, care are drept' +
        ' țintă dezvoltarea unor noi abilități prin sesiunile de învățare practică alături de specialiști ai domeniului.'
    }
  }
}

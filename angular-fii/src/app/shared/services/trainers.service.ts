import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainersService {

  constructor() { }

  getTrainers() {
    const trainers = [
      {
        name: 'Ovidiu Grigoras',
        category: 'frontend',
        aria: 'angular7'
      },
      {
        name: 'Adelina Dascalu',
        category: 'frontend',
        aria: 'angular7'
      },
      {
        name: 'Bogdan Balan',
        category: 'frontend',
        aria: 'react'
      },
      {
        name: 'Munteanu Alex',
        category: 'frontend',
        aria: 'react'
      },
      {
        name: 'Alin Avădănei-Proca',
        category: 'backend',
        aria: '.net'
      },
      {
        name: '   Vulpescu Radu',
        category: 'backend',
        aria: '.net'
      }
    ];
    return trainers;
  }
}

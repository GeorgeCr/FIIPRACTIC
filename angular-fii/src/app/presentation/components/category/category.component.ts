import { Component, OnInit } from '@angular/core';

import {AriasService} from '../../services/arias.service';
import {ActivatedRoute, Params} from '@angular/router';
import { TrainersService } from 'src/app/shared/services/trainers.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  trainers: any;
  arias: any;
  constructor(private trainersService: TrainersService,
              private ariasService: AriasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getTrainers();
    this.getArias();
  }

  getTrainers() {
    const allTrainers = this.trainersService.getTrainers();
    // this would be used with set and get
    // const ariaCategory = this.ariasService.getAriaCategory();
    // this.trainers = allTrainers.filter(trainerFiletered => trainerFiletered.category === ariaCategory);
    this.route.params.subscribe((params: Params) => {
     this.trainers = allTrainers.filter(trainerFiltered => trainerFiltered.category === params.aria);
   });
  }

  getArias() {
    const allArias = this.ariasService.getArias();
    // this would be used with set and get
    // const ariaCategory = this.ariasService.getAriaCategory();
    // this.arias = allArias.filter(ariaFiltered => ariaFiltered.category === ariaCategory);
    this.route.params.subscribe((params: Params) => {
      this.arias = allArias.filter(ariaFiltered => ariaFiltered.category === params.aria);
    });
  }
}

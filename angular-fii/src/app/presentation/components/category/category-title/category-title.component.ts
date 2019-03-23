import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-title',
  templateUrl: './category-title.component.html',
  styleUrls: ['./category-title.component.scss']
})
export class CategoryTitleComponent implements OnInit {
  @Input() ariaInput;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput = new FormControl();
  @Output() sendRes: EventEmitter <any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.searchInput.valueChanges.pipe(
      // aici pun operatorii din rxjs
      debounceTime(500)
    ).subscribe(res => {
      this.sendRes.emit(res);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AriasService } from '../../services/arias.service';
// import { AriaDetails } from '../../interfaces/aria-details';

@Component({
  selector: 'app-arias',
  templateUrl: './arias.component.html',
  styleUrls: ['./arias.component.scss']
})
export class AriasComponent implements OnInit {
  // arias: AriaDetails; // de facut acasa interfata pt asta
  arias: any = [];
  filteredArias: any = [];
  constructor(private ariasService: AriasService) { }

  ngOnInit() {
    this.getArias();
  }
  getArias(): void {
    // this.arias = this.ariasService.getArias();
    this.ariasService.getArias().subscribe(data => {
      this.arias = data;
      if (this.filteredArias.length < 1) {
        this.filteredArias = this.arias;
      }
    });
  }
  getAriaClicked(ariaCategory: any) {
    this.ariasService.setAriaCategory(ariaCategory);
  }

  getResponse(event) {
    this.filteredArias = this.arias.filter(aria => aria.stack.toLowerCase()
    .includes(event.toLowerCase()));
  }
}

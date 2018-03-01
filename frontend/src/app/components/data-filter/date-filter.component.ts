import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'date-filter',
  templateUrl: './date-filter.html',
  styleUrls: ['./date-filter.scss']
})

export class DateFilterComponent {
  @Output() onFilterChange = new EventEmitter<any>();

  years: number[] = [];
  datePeriod: {
    dateFrom: number
    dateTo: number
  };

  constructor() {

  }

  ngOnInit() {
    this.generateYears();
    this.datePeriod = {
      dateFrom: this.years[0],
      dateTo: this.years[this.years.length - 1]
    };
    this.onFilterChange.emit(this.datePeriod);
  }

  changeDatePeriod($event): void {
    this.onFilterChange.emit(this.datePeriod);
  }

  private generateYears(): void {
    for (let i = 1881; i < 2007; i++) {
      this.years.push(i);
    }
  }

}

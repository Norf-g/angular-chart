import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sourceFilter: string;
  dateFilter: any;

  onSourceFilterChange(text) {
    this.sourceFilter = text;
    console.log('sourceFilter', this.sourceFilter);
  }

  onDateFilterChange(datePeriod) {
    this.dateFilter = datePeriod;
    console.log('th', this.dateFilter);
  }
}

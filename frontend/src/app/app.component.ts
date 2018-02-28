import { Component } from '@angular/core';
import { cloneDeep } from 'lodash-es';

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
  }

  onDateFilterChange(datePeriod) {
    this.dateFilter = cloneDeep(datePeriod);
  }
}

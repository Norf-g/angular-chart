import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'source-filter',
  templateUrl: './source-filter.html',
  styleUrls: ['./source-filter.scss']
})

export class SourceFilterComponent {
  @Output() onFilterChange = new EventEmitter<any>();

  sources: {
    temperature: string,
    precipitation: string

  }

  constructor() {
    this.sources = {
      temperature: 'temperature',
      precipitation: 'precipitation'
    }
  }

  ngOnInit() {
    this.onFilterChange.emit(this.sources.temperature);
  }

  setType($event): void {
    this.onFilterChange.emit($event.value);
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatCard, MatButtonModule, MatButtonToggleModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import * as components from './components';
import { WeatherChartContainerComponent } from './containers/weather-chart-container/weather-chart-container.component';

import { WeatherApiService } from './services/weather.api.service';

@NgModule({
  declarations: [
    AppComponent,
    MatCard,
    WeatherChartContainerComponent,

    components.SourceFilterComponent,
    components.DateFilterComponent,
    components.WeatherChartComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    WeatherApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

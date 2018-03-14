import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { MatCard, MatButtonModule, MatButtonToggleModule, MatSelectModule, MatFormFieldModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import * as components from './components';
import { WeatherChartContainerComponent } from './containers/weather-chart-container/weather-chart-container.component';

import { WeatherApiService } from './services/weather.api.service';

import { AppReducer } from './app.reducer';
import { AppEffects } from './app.effects';

@NgModule({
  imports: [
    BrowserModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,

    StoreModule.forRoot(AppReducer),
    EffectsModule.forRoot(AppEffects)
  ],
  declarations: [
    AppComponent,
    MatCard,
    WeatherChartContainerComponent,

    components.SourceFilterComponent,
    components.DateFilterComponent,
    components.WeatherChartComponent,
  ],
  providers: [
    WeatherApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

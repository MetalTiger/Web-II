import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Weather } from './weather';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  // Http Params hacer el import buscandolo
  getWeather(city: string): Observable<Weather> {
    
  
    
  }

}

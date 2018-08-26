import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {enviroment} from '../../environments/environment';

interface ICurrentWeatherDate{
  weather:[{
    description: string,
    icon: string
  }],
  main:{
    temp: number
  },
  sys:{
    country: string
  },
  dt: number,
  name: string
}


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {

    getCurrentWeather(city:string, country:string){
     return this.httpClient.get,<ICurrentWeatherData>(
        `${enviroment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${enviroment.appId}`
      )
    }
   }
}

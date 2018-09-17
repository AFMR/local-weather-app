import { IWeatherService } from "./Iweather-service";
import { ICurrentWeather } from "../icurrent-weather";
import { Observable, of } from "rxjs";

export class WeatherServiceFake implements IWeatherService{
    private fakeWeather: ICurrentWeather = {
        city: 'Guadalajara',
        country: 'MX',
        date: 1485789600,
        image: '',
        temperature: 280.32,
        description: 'sunny'
    }

    public getCurrentWeather(search: string | number, country?: string): 
    Observable<ICurrentWeather>{
        return of(this.fakeWeather);
    }
}
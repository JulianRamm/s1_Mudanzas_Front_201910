import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Carga } from '../../carga/carga';
import { Ciudad } from '../ciudad';
import { WeatherSettings, TemperatureScale, WeatherLayout, ForecastMode } from 'angular-weather-widget';

@Component({
  selector: 'app-usuario-map',
  templateUrl: './usuario-map.component.html',
  styleUrls: ['./usuario-map.component.css']
})
export class UsuarioMapComponent implements OnInit {

  @Output() cerrar: EventEmitter<any> = new EventEmitter();

  @Input() carga: Carga;

  ciudad1: Ciudad;
  origin = undefined;

  ciudad2: Ciudad;
  destination = undefined;

  //Bogota como default
  lat: number = 4.710989;
  lng: number = -74.072090;
  
  positionTruck = {
    lat: this.lat,
    long: this.lng
  }

  settings1: WeatherSettings;
  settings2: WeatherSettings;

  constructor(
    private usuarioService: UsuarioService
  ) { }

  getCiudades(): void {
    this.usuarioService.getLatLongGeocoder(this.carga.lugarSalida)
      .subscribe(c => {
        console.log(c);
        this.ciudad1 = c;
        this.origin = {
          lat: this.ciudad1.results[0].geometry.location.lat,
          lng: this.ciudad1.results[0].geometry.location.lng
        }
      });
    this.usuarioService.getLatLongGeocoder(this.carga.lugarLlegada + ", Colombia")
      .subscribe(c2 => {
        this.ciudad2 = c2;
        this.destination = {
          lat: this.ciudad2.results[0].geometry.location.lat,
          lng: this.ciudad2.results[0].geometry.location.lng
        }
      });
      this.setWeatherCiudades(this.carga.lugarSalida, this.carga.lugarLlegada);
  }

  cerrarMapa(): void {
    this.ciudad1 = null;
    this.ciudad2 = null;
    this.carga = null;
    this.cerrar.emit();
    window.scrollTo({
      top: 300,
      behavior: 'smooth',
    });
  }

  setWeatherCiudades(ciudad1, ciudad2): void {
    this.settings1 = {
      location: {
        cityName: ciudad1
      },
      backgroundColor: '#a9a9a9',
      color: '#ffffff',
      width: '300px',
      height: 'auto',
      showWind: false,
      scale: TemperatureScale.CELCIUS,
      forecastMode: ForecastMode.DETAILED,
      showDetails: false,
      showForecast: true,
      layout: WeatherLayout.WIDE,
      language: 'es'
    };
    this.settings2 = {
      location: {
        cityName: ciudad2
      },
      backgroundColor: '#FF4500',
      color: '#ffffff',
      width: '300px',
      height: 'auto',
      showWind: false,
      scale: TemperatureScale.CELCIUS,
      forecastMode: ForecastMode.DETAILED,
      showDetails: false,
      showForecast: true,
      layout: WeatherLayout.WIDE,
      language: 'es'
    };
  }

  ngOnInit() {
    this.getCiudades();
  }

}

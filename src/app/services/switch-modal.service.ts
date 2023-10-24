import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchModalService {

  constructor() { }

  $modal = new EventEmitter<any>();
  $modalAcceso = new EventEmitter<any>();
  $modalTerminosCondiciones = new EventEmitter<any>();
  $politicaPrivacidad = new EventEmitter<any>();
  $scroll = new EventEmitter<any>();
}

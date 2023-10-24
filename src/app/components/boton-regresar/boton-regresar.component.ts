import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-regresar',
  templateUrl: './boton-regresar.component.html',
  styleUrls: ['./boton-regresar.component.scss']
})
export class BotonRegresarComponent {
  @Input() rutaCustom!:string;
}

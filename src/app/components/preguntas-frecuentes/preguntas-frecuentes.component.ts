import { Component } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent {
  texto!: string ;
  masMenos:boolean = false;
  masMenosActive:boolean = false;
  signoMas:boolean = true;
  visible!:number;

  rutaCustom:string = "/";
  selectedHero:any;
  selectedCheck:any;

  btnMenos!:number;

  listPreguntas = [] = [
    {
      id: 0,
      titulo: "Como registrarme?", 
      respuesta:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odio est dicta non quos, libero ipsum sint fugiat at aut repellendus et explicabo expedita facere maxime atque, cumque mollitia in!"
    },
    {
      id: 1,
      titulo: "Como descargar?", 
      respuesta:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odio est dicta non quos, libero ipsum sint fugiat at aut repellendus et explicabo expedita facere maxime atque, cumque mollitia in!"
    },
    {
      id: 2,
      titulo: "Como comprar membresias?", 
      respuesta:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odio est dicta non quos, libero ipsum sint fugiat at aut repellendus et explicabo expedita facere maxime atque, cumque mollitia in!"
    },
    {
      id: 3,
      titulo: "Cuanto tiempo son las membresias?", 
      respuesta:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odio est dicta non quos, libero ipsum sint fugiat at aut repellendus et explicabo expedita facere maxime atque, cumque mollitia in!"
    },
    {
      id: 4,
      titulo: "Como acceder a la plataforma?", 
      respuesta:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odio est dicta non quos, libero ipsum sint fugiat at aut repellendus et explicabo expedita facere maxime atque, cumque mollitia in!"
    },
    {
      id: 5,
      titulo: "Como ver previas ante de las descargas?", 
      respuesta:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit odio est dicta non quos, libero ipsum sint fugiat at aut repellendus et explicabo expedita facere maxime atque, cumque mollitia in!"
    }
  ]
  
  mostrarTexto(i:any){
    this.selectedCheck = i;
    this.btnMenos = -1;
    this.visible = i;
    this.masMenos = true;
  }
  ocultarTexto(i:any){
    this.btnMenos = i;
    this.visible = -1;
    this.masMenos = false;
  }
}

import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-membresia-user',
  templateUrl: './membresia-user.component.html',
  styleUrls: ['./membresia-user.component.scss']
})
export class MembresiaUserComponent{
  public screenResolution?: string;
  public isOpen:boolean = true;
  cardMembresiaList = [] = [
    {titulo: "ESTANDAR",
    precio: "30.00",
    tipoPlan: "MENSUAL",
    servicios: ["RENOVACION AUTOMATICA", "ACCESO ILIMITADO", "VIDEOS HD", "BARRA DE FAVORITOS", "PUEDE CANCELAR EN CUALQUIER MOMENTO", "BUSQUEDA AVANZADA"]
    },
    {titulo: "PRO",
    precio: "80.00",
    tipoPlan: "3 MESES",
    servicios: ["RENOVACION AUTOMATICA", "ACCESO ILIMITADO", "VIDEOS HD", "BARRA DE FAVORITOS", "PUEDE CANCELAR EN CUALQUIER MOMENTO", "BUSQUEDA AVANZADA"]
    },
    {titulo: "MASTER",
    precio: "150.00",
    tipoPlan: "6 MESES",
    servicios: ["RENOVACION AUTOMATICA", "ACCESO ILIMITADO", "VIDEOS HD", "BARRA DE FAVORITOS", "PUEDE CANCELAR EN CUALQUIER MOMENTO", "BUSQUEDA AVANZADA"]
    },
    {titulo: "VIP",
    precio: "200.00",
    tipoPlan: "1 AÑO",
    servicios: ["RENOVACION AUTOMATICA", "ACCESO ILIMITADO", "VIDEOS HD", "BARRA DE FAVORITOS", "PUEDE CANCELAR EN CUALQUIER MOMENTO", "BUSQUEDA AVANZADA"]
    }
  ]

  constructor(private renderer: Renderer2){

  }
  ngOnInit(){
    this.getScreenResolution();
  }
  ngAfterViewInit() {
    this.renderer.listen('window', 'resize', () => {
      this.getScreenResolution();
    });
  }
  getScreenResolution() {
    this.screenResolution = `${window.innerWidth} x ${window.innerHeight}`;
    
    if(window.innerWidth < 802){
      this.isOpen = false;
    }else{
      this.isOpen = true;
    }
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }
    
  
}

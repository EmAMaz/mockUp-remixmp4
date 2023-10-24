import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-membresia-user',
  templateUrl: './membresia-user.component.html',
  styleUrls: ['./membresia-user.component.scss']
})
export class MembresiaUserComponent{
  public screenResolution?: string;
  public isOpen:boolean = true;
  public rutaCustom:string = "/usuario";
  dropdownMenu = false;
  submenuRemixe = false;
  submenuGeneros = false;
  submenuBuscador = false;
  menuResponsiveActivado = false;

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
    
    if(window.innerWidth < 1162){
      this.menuResponsiveActivado = false;
    }else{
      this.menuResponsiveActivado = true;
    }
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }
  onHover($event:any) {
    console.log($event.srcElement.id)
    if($event.target.outerText.toLowerCase() === "remixers"){
      this.submenuGeneros = false;
      this.submenuBuscador = false;
      this.submenuRemixe = true;
    }else if($event.target.outerText.toLowerCase() === "generos"){
      this.submenuRemixe = false;
      this.submenuBuscador = false;
      this.submenuGeneros = true;
    }else if($event.target.outerText.toLowerCase() === "mi cuenta"){
      this.submenuRemixe = false;
      this.submenuGeneros = false;
      this.submenuBuscador = false;
      this.dropdownMenu = true;
    }else if($event.srcElement.id === "buscador"){
      this.submenuRemixe = false;
      this.submenuGeneros = false;
      this.dropdownMenu = false;
      this.submenuBuscador = true;
    }else{
      this.dropdownMenu = false;
      this.submenuRemixe = false;
      this.submenuGeneros = false;
    }
  }
  onHoverLeave() {
    this.dropdownMenu = false;
    this.submenuRemixe = false;
    this.submenuGeneros = false;
  }
  exitSearch(){
    this.submenuBuscador = false;
  }
  mostrarMenu(){
    this.menuResponsiveActivado = !this.menuResponsiveActivado;
  } 
  
}

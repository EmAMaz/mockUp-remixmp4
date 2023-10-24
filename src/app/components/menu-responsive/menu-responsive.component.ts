import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-responsive',
  templateUrl: './menu-responsive.component.html',
  styleUrls: ['./menu-responsive.component.scss']
})
export class MenuResponsiveComponent {
  @Input() logo!:boolean;
  @Input() buscador!:boolean;

  public menuResponsiveActivado:boolean = true;
  public submenuGeneros:boolean = false;
  public submenuBuscador:boolean = false;
  public submenuRemixe:boolean = false;
  public dropdownMenu:boolean = false;
  public screenResolution?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  listRemixers = [] = [
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"},
    {nombre: "Dj Pepe", image: "../../../assets/index-usuario/dj.png"}
  ]
  listGeneros = [] = [
    {nombre: "Regueton"},
    {nombre: "Rock"},
    {nombre: "Cumbia"},
    {nombre: "Regueton"},
    {nombre: "Rock"},
    {nombre: "Cumbia"},
    {nombre: "Regueton"},
    {nombre: "Rock"},
    {nombre: "Cumbia"},
    {nombre: "Regueton"},
    {nombre: "Rock"},
    {nombre: "Cumbia"}
  ]
  ngOnInit(){
    this.dropdownMenu = false;
    this.getScreenResolution();
  }

  ngAfterViewInit() {
    this.renderer.listen('window', 'resize', () => {
      this.getScreenResolution();
    });
  }
  getScreenResolution() {
    this.screenResolution = `${window.innerWidth} x ${window.innerHeight}`;
    if(window.innerWidth < 1200){
      this.submenuBuscador = false;
      this.menuResponsiveActivado = false;
    }else{
      this.menuResponsiveActivado = true;
    }
  }
  mostrarMenu(){
    this.menuResponsiveActivado = !this.menuResponsiveActivado;
  }

  exitSearch(){
    this.submenuBuscador = false;
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

}

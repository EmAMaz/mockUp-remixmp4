import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { SwitchModalService } from 'src/app/services/switch-modal.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-menu-responsive-home',
  templateUrl: './menu-responsive-home.component.html',
  styleUrls: ['./menu-responsive-home.component.scss']
})
export class MenuResponsiveHomeComponent {
  isOpen: boolean = true;
  btnSliderMain: boolean = false;
  isActiveLink: boolean = false;
  screenResolution?: string;
  selectedButton: number = 0;
  modalTerminosCondiciones!:boolean;
  modalPoliticaPriv!:boolean;

  constructor(private modalService:SwitchModalService,@Inject(DOCUMENT) private document: Document, private renderer: Renderer2){}

  ngOnInit(){
    this.modalService.$modal.subscribe((valor)=>{
      this.modalShow = valor;
      console.log("este es el valor de footer " + valor)
    })
    this.modalService.$modalAcceso.subscribe((valor)=>{
      this.modalShowAcceso = valor;
    })
    this.modalService.$modalTerminosCondiciones.subscribe((valor)=>{
      this.modalTerminosCondiciones = valor;
    })
    this.getScreenResolution();
    AOS.init();
    window.addEventListener('load', AOS.refresh);

  }
  ngAfterViewInit() {
    this.renderer.listen('window', 'resize', () => {
      this.getScreenResolution();
    });
    
  }
  getScreenResolution() {
    this.screenResolution = `${window.innerWidth} x ${window.innerHeight}`;
    
    if(window.innerWidth < 770){
      this.isOpen = false;
    }else{
      this.isOpen = true;
    }
  }

  modalShow!:boolean;
  modalShowAcceso!:boolean;
  scrollShow!:string;
  public class!:string;
  openModal(){
    this.modalService.$modal.emit(true);
    this.scrollShow = "hidden";
    const body = this.document.body;
    body.style.overflow = this.scrollShow;
    
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la página hacia arriba suavemente
  }

}

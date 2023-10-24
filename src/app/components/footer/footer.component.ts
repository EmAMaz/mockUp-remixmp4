import { Component } from '@angular/core';
import { SwitchModalService } from 'src/app/services/switch-modal.service';

@Component ({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public modalShow!:boolean;

  constructor(private modalService:SwitchModalService){}

  abrirModal($event:any){
    if($event.target.id === "terminosCondiciones"){
      this.modalService.$modalTerminosCondiciones.emit(true);
    }else if($event.target.id === "politicaPrivacidad"){
      this.modalService.$politicaPrivacidad.emit(true);
    }
  }
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la página hacia arriba suavemente
  }
}

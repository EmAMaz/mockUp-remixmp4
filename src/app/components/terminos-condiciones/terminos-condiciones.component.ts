import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SwitchModalService } from 'src/app/services/switch-modal.service';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.scss']
})
export class TerminosCondicionesComponent {
  public modalShow: boolean = false;
  constructor(private modalService:SwitchModalService,@Inject(DOCUMENT) private document: Document){}
  scrollShow:any;

  closeModalAcceso(){
    this.modalService.$modalTerminosCondiciones.emit(false);
    this.scrollShow = "visible";
    const body = this.document.body;
    body.style.overflow = this.scrollShow;
  }
}

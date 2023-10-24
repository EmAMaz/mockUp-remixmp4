import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SwitchModalService } from 'src/app/services/switch-modal.service';

@Component({
  selector: 'app-politica-privacidad',
  templateUrl: './politica-privacidad.component.html',
  styleUrls: ['./politica-privacidad.component.scss']
})
export class PoliticaPrivacidadComponent {
  public modalShow: boolean = false;
  constructor(private modalService:SwitchModalService,@Inject(DOCUMENT) private document: Document){}
  scrollShow:any;

  closeModal(){
    this.modalService.$politicaPrivacidad.emit(false);
    this.scrollShow = "visible";
    const body = this.document.body;
    body.style.overflow = this.scrollShow;
  }
}

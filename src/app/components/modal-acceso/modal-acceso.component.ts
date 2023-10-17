import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { SwitchModalService } from 'src/app/services/switch-modal.service';

@Component({
  selector: 'app-modal-acceso',
  templateUrl: './modal-acceso.component.html',
  styleUrls: ['./modal-acceso.component.scss']
})
export class ModalAccesoComponent {
  public modalShow: boolean = false;
  constructor(private modalService:SwitchModalService,@Inject(DOCUMENT) private document: Document){}
  scrollShow:any;
  
  closeModalAcceso(){
    this.modalService.$modalAcceso.emit(false);
    this.modalShow = true;
    this.scrollShow = "visible";
    const body = this.document.body;
    body.style.overflow = this.scrollShow;
  }
}

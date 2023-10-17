import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SwitchModalService } from 'src/app/services/switch-modal.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{
  public modalShow: boolean = false;
  constructor(private modalService:SwitchModalService,@Inject(DOCUMENT) private document: Document){}
  scrollShow:any;

  ngOnInit(){
    AOS.init();
  };

  closeModal(){
    this.modalService.$modal.emit(false);
    this.modalShow = true;
    this.scrollShow = "visible";
    const body = this.document.body;
    body.style.overflow = this.scrollShow;
  }
  
}


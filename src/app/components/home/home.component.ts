import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { SwitchModalService } from 'src/app/services/switch-modal.service';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isOpen: boolean = true;
  btnSliderMain: boolean = false;
  isActiveLink: boolean = false;
  screenResolution?: string;
  selectedButton: number = 0;
  btnSliderDj = [
    { id: 0},
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4,},
  ];

  constructor(private modalService:SwitchModalService,@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, private el: ElementRef){}
  
  ngOnInit(){
    this.modalService.$modal.subscribe((valor)=>{
      this.modalShow = valor;
    })
    this.modalService.$modalAcceso.subscribe((valor)=>{
      this.modalShowAcceso = valor;
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

  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('swiperDJ', { static: false }) swiperDJ?: SwiperComponent;

  slideNext(){
    this.swiper?.swiperRef.slideNext(500);
    this.btnSliderMain = true;
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(500);
    this.btnSliderMain = false;
  }
  slideTo(indice:number){
    this.swiperDJ?.swiperRef.slideTo(indice,1500);
  }
  selectButtonDj(item:number){
    this.selectedButton = item;
    this.slideTo(item)
  }
  config: SwiperOptions = {
    breakpoints:{
      890:{
        slidesPerView:1,
      },
      1100: {
        slidesPerView: 2,
      },
      1530: {
        slidesPerView: 3,
        spaceBetween:50
      }
    }
  };
  sliderImagesDj = [
    "../assets/slider_dj/personaje3.png",
    "../assets/slider_dj/personaje2.png",
    "../assets/slider_dj/personaje1.png",
    "../assets/slider_dj/personaje1.png",
    "../assets/slider_dj/personaje2.png",
    "../assets/slider_dj/personaje3.png",
  ];
  sliderImagesOne = [
    "../assets/image2.png",
    "../assets/image1.png",
    "../assets/image2.png",
    "../assets/image1.png",
  ];
  modalShow!:boolean;
  modalShowAcceso!:boolean;
  scrollShow!:string;
  public class!:string;
  openModal(){
    this.modalShow = true; 
    this.scrollShow = "hidden";
    const body = this.document.body;
    body.style.overflow = this.scrollShow;
    
  }
  openModalAcceso(){
    this.modalShowAcceso = true; 
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

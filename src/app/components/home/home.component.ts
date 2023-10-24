import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2, ViewChild } from '@angular/core';
import { SwitchModalService } from 'src/app/services/switch-modal.service';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { SwiperOptions, Autoplay, FreeMode } from 'swiper';
import * as AOS from 'aos';

SwiperCore.use([Autoplay, FreeMode]);

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
  modalTerminosCondiciones!:boolean;
  modalPoliticaPriv!:boolean;
  btnSliderDj = [
    { id: 0},
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4,},
  ];

  constructor(private modalService:SwitchModalService,@Inject(DOCUMENT) private document: Document, private renderer: Renderer2){}
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('swiperDJ', { static: false }) swiperDJ?: SwiperComponent;


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
    this.modalService.$politicaPrivacidad.subscribe((valor)=>{
      this.modalPoliticaPriv = valor;
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

  slideNext(){
    this.swiper?.swiperRef.slideNext(1500);
    console.log(this.swiper?.s_activeIndexChange) 
    this.btnSliderMain = true;
  }
  slidePrev(){
    this.swiper?.swiperRef.slidePrev(1500);
    this.btnSliderMain = false;
  }
  slideTo(indice:number){
    this.swiperDJ?.swiperRef.slideTo(indice,1500);
  }
  selectButtonDj(item:number){
    this.selectedButton = item;
    this.slideTo(item)
  }
  configMain: SwiperOptions = {
    loop:true,
    autoplay: {
      delay:4000,
      disableOnInteraction:false
    },
    freeMode:{
      sticky:true,
    },
    speed:3000,
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
    },
  };
  configDJ: SwiperOptions = {
    loop:true,
    autoplay: {
      delay:4000,
      disableOnInteraction:false
    },
    freeMode:{
      sticky:true,
    },
    speed:3000,
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
    },
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

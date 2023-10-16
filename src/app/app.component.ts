import { Component, HostBinding,Inject, ViewChild, Renderer2, ElementRef, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as AOS from 'aos';
import SwiperCore, { SwiperOptions, Manipulation, Pagination, Navigation,Virtual } from 'swiper';

SwiperCore.use([Navigation,Pagination, Manipulation, Virtual]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
      AOS.init();
      window.addEventListener('load', AOS.refresh);
  }
}

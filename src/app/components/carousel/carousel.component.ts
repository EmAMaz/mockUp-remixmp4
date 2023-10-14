import { Component, Input, OnInit } from '@angular/core';
import { ICarrouselItem } from 'src/app/Icarrousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input() height = 400;
  @Input() isFullScreen = false;
  @Input() items: ICarrouselItem[] = [];

  public finalHeight: string | number = -10;
  public currentPosition = -10;

  constructor(){
    this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
  }
  ngOnInit(){
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = -10;
    });
  }

  setCurrentPosition(position:number){
    this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = -24 * position;

  }

  // setNext(){
  //   let finalPorcentaje = -10;
  //   let nextPosition = this.currentPosition + 1;
  //   if(nextPosition <= this.items.length - 1){
  //     finalPorcentaje = -10 * nextPosition;
  //   }else{
  //     nextPosition = 0;
  //   }
  //   this.items.find((i) => i.id === 0)!.marginLeft = finalPorcentaje;
  //   this.currentPosition = nextPosition;
  // }

  // setBack(){
  //   let finalPorcentaje = -10;
  //   let backPosition = this.currentPosition - 1;
  //   if(backPosition >= 0){
  //     finalPorcentaje = -50 * backPosition;
  //   }else{
  //     backPosition = this.items.length - 1;
  //     finalPorcentaje = -50*backPosition;
  //   }
  //   this.items.find((i) => i.id === 0)!.marginLeft = finalPorcentaje;
  //   this.currentPosition = backPosition;
  // }
}

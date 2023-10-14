import { Component, Input } from '@angular/core';
import { ICarrouselItem } from 'src/app/Icarrousel-item';

@Component({
  selector: 'app-carousel-opinion',
  templateUrl: './carousel-opinion.component.html',
  styleUrls: ['./carousel-opinion.component.scss']
})
export class CarouselOpinionComponent {
  @Input() isFullScreen = false;
  @Input() items: ICarrouselItem[] = [];

  public finalHeight: string | number = 0;
  public currentPosition = 0;

  constructor(){
    
  }
  ngOnInit(){
    this.items.map((i, index) => {
      i.id = index;
      i.marginLeft = 4;
    });
  }

  setCurrentPosition(position:number){
    this.currentPosition = position;
    this.items.find((i) => i.id === 0)!.marginLeft = -10 * position;

  }
}

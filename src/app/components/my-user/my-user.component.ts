import { Component, Renderer2 } from '@angular/core';
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.scss']
})
export class MyUserComponent {
  public isOpen: boolean = true;
  public screenResolution?: string;
  public selectedItem: string = "Filtrar";
  public dropdownActive: boolean = false;
  public colActiva: boolean = true;
  public filterOption: boolean = false;

  public membresiaActive: boolean = true; 
  public pagoActive: boolean = true; 
  public precioActive: boolean = true; 
  public itemListUser: any[] = []; 

  constructor(private renderer: Renderer2){}
  ngOnInit(){
    this.getScreenResolution();
    this.itemListUser = [
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"},
      {fecha:"20/12/2023",nOrder:"0000037", membresia:"Plan basico", pago:"Paypal", precioTotal: "$20.00"}
    ]
  }
  ngAfterViewInit() {
    this.renderer.listen('window', 'resize', () => {
      this.getScreenResolution();
    });
  }
  getScreenResolution() {
    this.screenResolution = `${window.innerWidth} x ${window.innerHeight}`;
    
    if(window.innerWidth < 802){
      this.isOpen = false;
    }else{
      this.isOpen = true;
    }
    if(window.innerWidth < 650){
      this.colActiva = false;
      this.filterOption = true;
    }else{
      this.filterOption = false;
      this.colActiva = true;
      this.membresiaActive = true; 
      this.pagoActive = true; 
      this.precioActive = true; 
    }
    
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }
  selectCol($event:any){
    if($event.target.innerHTML.toLowerCase() === "pago"){
      this.selectedItem = $event.target.innerHTML;
      this.dropdownActive = false;
      this.precioActive = false;
      this.membresiaActive = false;

      this.pagoActive = true;
    }else if($event.target.innerHTML.toLowerCase() === "plan membresia"){
      this.selectedItem = $event.target.innerHTML;
      this.dropdownActive = false;
      this.precioActive = false;
      this.pagoActive = false;

      this.membresiaActive = true;
    }else if($event.target.innerHTML.toLowerCase() === "precio total"){
      this.selectedItem = $event.target.innerHTML;
      this.dropdownActive = false;
      this.membresiaActive = false;
      this.pagoActive = false;

      this.precioActive = true;
    }else{
      this.dropdownActive = !this.dropdownActive;
    }
    
  }
  
}

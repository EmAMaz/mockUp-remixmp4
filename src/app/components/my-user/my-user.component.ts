import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-my-user',
  templateUrl: './my-user.component.html',
  styleUrls: ['./my-user.component.scss']
})
export class MyUserComponent {
  public isOpen: boolean = true;
  public screenResolution?: string;
  public itemListUser = [] = [
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

  constructor(private renderer: Renderer2){}
  ngOnInit(){
    this.getScreenResolution();
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
  }
  openMenu() {
    this.isOpen = !this.isOpen;
  }
    
}

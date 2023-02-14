import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuScrolled=false;
  @HostListener('window:scroll')
  scrollCheck(){
    if(window.pageYOffset>400){
      this.isMenuScrolled=true;
    }
    else
    {
      this.isMenuScrolled=false;
    }
  }

}

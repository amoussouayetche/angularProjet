import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './include/navbar/navbar.component';
import { FooterComponent } from './include/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,NavbarComponent,FooterComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularfood';
  @HostListener('windows.scroll',['$event'])
  onWindowScroll(event:Event){
    const scrollposition=window.scrollY || document.documentElement.scrollTop;
    const sections:any=document.querySelectorAll('.section');
    sections.forEach((section:HTMLElement)=>{
      if (section.offsetTop <= scrollposition && section.offsetTop + section.offsetHeight >scrollposition) {
        console.log(section.id);
      } else {
        
      }
    })
  }
}

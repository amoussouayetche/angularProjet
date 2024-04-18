import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myImage:string="assets/img1.jpg"
  myImage2:string="assets/img2.jpg"
  myImage3:string="assets/img3.jpg"
  myImage4:string="assets/img4.jpg"
  myImage5:string="assets/img5.jpg"
  myImage6:string="assets/img6.jpg"
  myImage7:string="assets/img7.jpg"
  myImage8:string="assets/img8.jpg"

  inView(ele:any){
    ele.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})
  }
}

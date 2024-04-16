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
}

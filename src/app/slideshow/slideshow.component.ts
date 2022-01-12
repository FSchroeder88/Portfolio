import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['desk-g950edea9a_1920.jpg', 'home-office-g71ae2df85_1920.jpg', 'man-gde59e089a_1920.jpg'];
  headlines = [
    'Bring engineering to the next level',
    'Born to Code',
    'Forever Code'
  ]; 
  currentImage = 0;
  showImage = true;


  ngOnInit() {
    this.updateImage();
  }

  updateImage() {

      setInterval(() => {
        this.currentImage++;
        this.currentImage = this.currentImage % this.images.length;
        this.showImage = false;

        setTimeout(() => {
          this.showImage = true;
        }, 10);
      }, 7000);
  }
  constructor() { }

}

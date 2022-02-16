import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  showMeall: boolean = false;
  showMeJavascript: boolean = false;
  showMeAngular: boolean = false;
  showMeallColor: boolean = false;
  showMejsColor: boolean = false;
  showMeangularColor: boolean = false;


  ngOnInit(): void {

  }

  AppComponent() {



  }

  toogleTagall() {
    this.showMeallColor = true;
    this.showMeall = true;
    this.showMeJavascript = true;
    this.showMeAngular = true;
    this.showMejsColor = false;
    this.showMeangularColor = false;
  }

  toogleTagJavascript() {
    this.showMejsColor = true;
    this.showMeJavascript = true;
    this.showMeAngular = false;
    this.showMeall = false;
    this.showMeallColor = false;
    this.showMeangularColor = false;
  }

  toogleTagAngular() {
    this.showMeangularColor = true;
    this.showMeAngular = true;
    this.showMeall = false;
    this.showMeJavascript = false;
    this.showMeallColor = false;
    this.showMejsColor = false;
  }

}

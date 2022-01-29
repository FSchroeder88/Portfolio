import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  showMeall:boolean = false;
  showMeJavascript:boolean = false;
  showMeAngular:boolean = false;

  ngOnInit(): void {
  
  }
toogleTagall(){
  this.showMeall = true;
  this.showMeJavascript = true;
  this.showMeAngular = true;
}

toogleTagJavascript(){
  this.showMeJavascript = true;
  this.showMeAngular = false;
  this.showMeall = false;
}

toogleTagAngular(){
  this.showMeAngular = true;
  this.showMeall = false;
  this.showMeJavascript = false;
}
 
}

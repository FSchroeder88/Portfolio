import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  x = document.getElementById("myTopnav");
  @Input() darkMode = true;
  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    this.x = document.getElementById("myTopnav");
    if (this.x!.className === "menu") {
        this.x!.className += " responsive";
    } else {
      this.x!.className = "menu";
    }
  }

  
}

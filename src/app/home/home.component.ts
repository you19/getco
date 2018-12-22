import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showHideSidebar:boolean =true;
  constructor() { }

  ngOnInit() {
  
  }
  onShowSidebarChange(showHideSidebar){
    this.showHideSidebar = showHideSidebar;
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input()
showSideBar:boolean;
@Output()
showSidebarChange:EventEmitter<boolean>=new EventEmitter<boolean>();
  constructor(public router:Router) { }

  ngOnInit() {
  }
  afficherSidebar(){
   this.showSideBar=!this.showSideBar;
   this.showSidebarChange.emit(this.showSideBar);
  }
  logout(){
    this.router.navigate(['login']);
  }

}

import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url: string = "";
  adminHeader: boolean = false;
  usersHeader: boolean = false;

  constructor(@Inject(DOCUMENT) public doc: Document) { }
  ngDoCheck() {
    this.url = this.doc.location.pathname;
    if (this.url == "/admin") {
      this.usersHeader = false;
      this.adminHeader = true;
    }
    else {
      this.adminHeader = false;
      this.usersHeader = true;
    }
  }


  ngOnInit(): void {
  }

}

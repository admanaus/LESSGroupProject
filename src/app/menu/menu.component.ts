import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuBoxes: string[] = ['Inbox', 'Sent', 'Drafts' ];
  labels: string[] = ['Work', 'Fashion', 'Animals', 'Code'];
  constructor() { }

  ngOnInit() {
  }

}

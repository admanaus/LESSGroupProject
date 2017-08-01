import { Component, OnInit } from '@angular/core';
import {EmailDataService} from "../services/email-data.service";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  emailData: any;

  constructor(
    private emailDataService: EmailDataService,
  ) { }

  ngOnInit() {
    this.emailData = this.emailDataService.getData();
  }

}

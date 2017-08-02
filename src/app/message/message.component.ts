import { Component, OnInit } from '@angular/core';
import { EmailDataService } from '../services/email-data.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  emailData: any;
  text: string;

  constructor(
    private emailDataService: EmailDataService,
  ) { }

  ngOnInit() {
    this.emailData = this.emailDataService.getData();
    this.text = this.emailData[0].body
  }

}

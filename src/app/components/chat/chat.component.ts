import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  hope = JSON.parse(sessionStorage.getItem('user'));

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private af: AngularFireDatabase) {
  }

  ngOnInit() {
  }
  
  public map: any = { lat: 35.330153, lng: -80.732529 };

  onSubmit(form: NgForm){
    console.log(form);
    const value = form.value;
    const name = value.name;
    const email = value.email;
    const message = value.content;
    const subject = value.subject;

    let formRequest = { name, email, subject, message};
    this.af.list('/messages').push(formRequest);
    form.reset();
  }
}

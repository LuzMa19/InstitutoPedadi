import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
declare let alertify: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }

  contactForm(form){
    this._MessageService.sendMessage(form).subscribe(() => {
      alertify.success('Formulario enviado correctamente')
console.log(form);
    })
  }


  ngOnInit() {
  }

}

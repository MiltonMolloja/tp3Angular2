import { Component, OnInit } from '@angular/core';

import { Mensaje } from './../../models/mensaje';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {

  mensaje: Mensaje;
  tamMaximo: number = 75;
  tamTexto: number;

  mensajes: Array<Mensaje>;


  constructor() { 
    this.mensaje = new Mensaje();
    this.mensajes = new Array<Mensaje>();
  }

  ngOnInit() {
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.contenido.length;
    console.log(this.tamTexto +" / "+ this.tamMaximo);
    
  }
}

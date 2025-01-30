import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss'
})
export class EventosComponent implements OnInit {

  public eventos: any;



  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void{
    this.eventos = [
      {
      Tema: 'Angular 11',
      Local: 'Belo Horizonte'
    },
    {
      Tema: '.NET',
      Local: 'São Paulo'
    },
    {
      Tema: 'Angular e suas novidades',
      Local: 'Rio de Janeiro'
    },
  ]
  }

}

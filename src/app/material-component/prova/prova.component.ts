import {  Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.scss']
})
export class ProvaComponent implements OnInit {

  @Input() data: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.data)
  }

}

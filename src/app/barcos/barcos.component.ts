import { Component, OnInit } from '@angular/core';
import { intBarcos } from '../barcos';
import { BARCOS } from '../mock-barcos';


@Component({
  selector: 'app-barcos',
  templateUrl: './barcos.component.html',
  styleUrls: ['./barcos.component.css']
})

export class BarcosComponent implements OnInit {

  barco = BARCOS;
  selectedBarco?: intBarcos;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(barco: intBarcos): void {
    this.selectedBarco = barco;
  }
}
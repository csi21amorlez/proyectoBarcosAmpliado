import { Component, OnInit, Input } from '@angular/core';
import { intBarcos } from '../barcos';

@Component({
  selector: 'app-desc-barcos',
  templateUrl: './desc-barcos.component.html',
  styleUrls: ['./desc-barcos.component.css']
})
export class DescBarcosComponent implements OnInit {
  @Input() barco?: intBarcos;

  constructor() { }

  ngOnInit(): void {
  }

}
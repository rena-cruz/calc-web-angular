import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visor',
  templateUrl: './visor.component.html',
  styleUrls: ['./visor.component.css']
})
export class VisorComponent implements OnInit {

  @Input() valor : string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}

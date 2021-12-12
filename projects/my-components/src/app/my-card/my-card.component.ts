import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

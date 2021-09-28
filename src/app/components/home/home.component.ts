import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ID_PROPERTY } from 'gridx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ID_PROPERTY, useValue: 'id' }
  ]
})
export class HomeComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

}

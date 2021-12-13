import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyCardComponent implements OnInit {

  @Input()
  public title: string = '默认标题';
  public constructor() { }

  public ngOnInit(): void {
  }

  public updateTitle(): void {
    this.title = new Date().toTimeString();
  }

}

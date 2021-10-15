import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import * as faker from 'faker';
import { MyStoreService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    MyStoreService
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  private subs = new SubSink();
  public constructor(
    private store: MyStoreService
  ) { }

  public ngOnInit(): void {
    // this.subs.sink = this.store.state$.subscribe(state => {
    //   console.log('state change:', state);
    // });

    this.subs.sink = this.store.name$.subscribe(name => {
      console.log('name change:', name);
    });

    // this.subs.sink = this.store.info$.subscribe(info => {
    //   console.log('info change:', info);
    // });

    this.subs.sink = this.store.select(s => s['k1']).subscribe(d => {
      console.log('k1 change:', d);
    });

    this.subs.sink = this.store.select(s => s['k2']).subscribe(d => {
      console.log('k2 change:', d);
    });
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public changeName(): void {
    // this.store.changeName(faker.name.findName());
    this.store.changeName('robot');
  }

  public changeInfo(): void {
    this.store.changeInfo({ uuid: faker.datatype.uuid() });
  }

  public changeK1(): void {
    this.store.changeDynamic('k1', { uuid: faker.datatype.uuid() });
  }

}

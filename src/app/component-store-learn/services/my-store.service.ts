import { Injectable, Injector } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface IMyState {
  name: string;
  age: number;
  info?: { [key: string]: any };
  [key: string]: any;
}

@Injectable()
export class MyStoreService extends ComponentStore<IMyState> {

  public name$ = this.select(s => s.name);
  public info$ = this.select(s => s.info);
  public constructor(
    protected injector: Injector
  ) {
    super({
      name: 'robot',
      age: 100
    });
  }

  public changeName(name: string): void {
    this.patchState({ name });
  }

  public changeInfo(info: { [key: string]: any }): void {
    this.patchState({ info });
  }

  public changeDynamic(key: string, data: { [key: string]: any }): void {
    this.patchState({ [key]: data });
  }

}

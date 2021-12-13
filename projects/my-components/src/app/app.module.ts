import { CommonModule } from '@angular/common';
import { Injector, NgModule } from '@angular/core';
import { MyCardComponent } from './my-card/my-card.component';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
})
export class AppModule {

  public constructor(private injector: Injector) { }

  public ngDoBootstrap() {
    const element = createCustomElement(MyCardComponent, { injector: this.injector })
    customElements.define("app-my-card", element);
  }
}

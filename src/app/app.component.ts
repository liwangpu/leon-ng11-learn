import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  // value: any = 'robot';
  control = new FormControl('robot');
  public constructor() {

  }

  public ngOnInit(): void {
    this.control.valueChanges
      .pipe(debounceTime(120))
      .subscribe(val => {
        console.log(`change:`, val);
        console.log(`valid:`,this.control.valid);
      });

    // this.control.v
    // .subscribe(val => {
    //   // console.log(`change:`, val);
    // });
  }

}

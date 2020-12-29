import { Component, OnInit } from '@angular/core';
// import { TaskType as BarTaskType } from "bar";
// import { TaskType as FooTaskType } from "foo";
import { TaskType as BazTaskType } from "baz/shared";

@Component({
    selector: 'lib-my-lib',
    template: `
    <p>
      my-lib works!
    </p>
  `,
    styles: [
    ]
})
export class MyLibComponent implements OnInit {

    // task1 = BarTaskType;
    // task2 = FooTaskType;
    task3 = BazTaskType;
    constructor() { }

    ngOnInit(): void {
    }

}

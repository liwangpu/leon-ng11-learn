import { Component, OnInit } from '@angular/core';
import { TaskType } from "bar";

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

    task = TaskType;
    constructor() { }

    ngOnInit(): void {
    }

}

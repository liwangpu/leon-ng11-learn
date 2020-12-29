import { Component, OnInit } from '@angular/core';

import { TaskType } from 'bar';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public t = TaskType;
    public constructor() {

    }

    public ngOnInit(): void {

    }
}

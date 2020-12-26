import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'foo-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    time: any;
    constructor() { }

    ngOnInit() {
        this.time = moment.now();
    }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';
import { getToggleValue, setToggleValue } from '../../models/logger';

@Component({
    selector: 'app-logger',
    templateUrl: './logger.component.html',
    styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    private subs: SubSink = new SubSink();
    public constructor(
        fb: FormBuilder
    ) {
        this.form = fb.group({
            logTitle: [],
            logOnChanges: [],
            logOnInit: [],
            logDoCheck: [],
            logAfterContentInit: [],
            logAfterContentChecked: [],
            logAfterViewInit: [],
            logAfterViewChecked: [],
            logOnDestroy: []
        });
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public ngOnInit(): void {
        let initialValue = {
            logTitle: getToggleValue('logTitle'),
            logOnChanges: getToggleValue('logOnChanges'),
            logOnInit: getToggleValue('logOnInit'),
            logDoCheck: getToggleValue('logDoCheck'),
            logAfterContentInit: getToggleValue('logAfterContentInit'),
            logAfterContentChecked: getToggleValue('logAfterContentChecked'),
            logAfterViewInit: getToggleValue('logAfterViewInit'),
            logAfterViewChecked: getToggleValue('logAfterViewChecked'),
            logOnDestroy: getToggleValue('logOnDestroy')
        };
        this.form.patchValue(initialValue);

        this.subs.sink = this.form.valueChanges.subscribe(val => {
            let keys: Array<string> = Object.keys(val);
            keys.forEach(k => {
                setToggleValue(k, val[k]);
            });
            location.reload();
        });
    }

}

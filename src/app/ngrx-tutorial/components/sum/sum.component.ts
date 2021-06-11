import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SubSink } from 'subsink';
import * as fromStore from '../../../state-store';

@Component({
    selector: 'app-sum',
    templateUrl: './sum.component.html',
    styleUrls: ['./sum.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SumComponent implements OnInit, OnDestroy {

    public form: FormGroup;
    public sum: number = 0;
    private subs = new SubSink();
    public constructor(
        private store: Store<fromStore.IStore>,
        private cd: ChangeDetectorRef,
        fb: FormBuilder
    ) {
        this.form = fb.group({
            num1: [0],
            num2: [0]
        });
    }


    public ngOnInit(): void {
        this.subs.sink = this.form.valueChanges.subscribe(val => {
            this.store.dispatch(fromStore.setNumbers(val));
        });
        this.subs.sink = this.store.select(fromStore.selectSumByMethod2).subscribe(sum => {
            this.sum = sum;
            this.cd.markForCheck();
        });
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public changeState(): void {

    }

}

import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-top',
    templateUrl: './top.component.html',
    styleUrls: ['./top.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => TopComponent)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopComponent extends Logger {

    public key: string = 'Top';
    public myName: string = 'default';
    public constructor(
        injector: Injector
    ) {
        super(injector);
        console.log(`${this.key} ctor`);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
    }

    public ngOnInit(): void {
        super.ngOnInit();


        new Promise(resolve => {
            resolve(1);
        }).then(res => {
            console.log(`promise work:`, res);
            this.myName=`promise 1`;
        });

        new Promise(resolve => {
            resolve(2);
        }).then(res => {
            console.log(`promise work:`, res);
            this.myName=`promise 2`;
        });

        setTimeout(() => {
            console.log(`settimeout work: 1`);
            this.myName=`settimeout 1`;
        });

        setTimeout(() => {
            console.log(`settimeout work: 2`);
            this.myName=`settimeout 2`;
        });
    }


    public ngDoCheck(): void {
        super.ngDoCheck();
    }

    public ngAfterContentInit(): void {
        super.ngAfterContentInit();
    }

    public ngAfterContentChecked(): void {
        super.ngAfterContentChecked();
    }

    public ngAfterViewInit(): void {
        super.ngAfterViewInit();
    }

    public ngAfterViewChecked(): void {
        super.ngAfterViewChecked();
    }

    public ngOnDestroy(): void {
        super.ngOnDestroy();
    }

    public test(): void {
        // this.myName = Date.now().toString();
        // this.opsat.publishMessage('user', { name: this.myName });
        new Promise(resolve => {
            resolve(1);
        }).then(res => {
            console.log(`promise work:`, res);
            this.myName=`promise 1`;
        });

        new Promise(resolve => {
            resolve(2);
        }).then(res => {
            console.log(`promise work:`, res);
            this.myName=`promise 2`;
        });
        setTimeout(() => {
            console.log(`settimeout work: 3`);
            this.myName=`settimeout 3`;
        });
    }
}

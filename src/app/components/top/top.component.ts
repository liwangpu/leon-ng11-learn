import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { Logger } from '../../models/logger';
import { from, timer } from "rxjs";

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
    public myName: string;
    public constructor(
        injector: Injector
    ) {
        super(injector);
        console.log(`${this.key} ctor`);
        window['myCab'] = this.test;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        super.ngOnChanges(changes);
    }

    public ngOnInit(): void {
        super.ngOnInit();
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
        console.log('work');
        
        // this.myName = Date.now().toString();
        // this.opsat.publishMessage('user', { name: this.myName });

        // setTimeout(() => {
        //     // this.top.myName = 'hack';
        // });
        // Promise.resolve().then(() => {
        //     console.log(1);
        // });
        // Promise.resolve().then(() => {
        //     console.log(2);
        // });
        // from([1, 2, 3]).subscribe(res => {
        //     console.log(res);

        // });

        // from([4, 5, 6]).subscribe(res => {
        //     console.log(res);

        // });

        // timer(200).subscribe(res => {
        //     console.log(res);

        // })
    }
}

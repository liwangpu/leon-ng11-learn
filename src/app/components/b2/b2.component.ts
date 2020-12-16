import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-b2',
    templateUrl: './b2.component.html',
    styleUrls: ['./b2.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => B2Component)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class B2Component extends Logger {

    public key: string = 'B2';
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

    }
}

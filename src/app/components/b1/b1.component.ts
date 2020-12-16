import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-b1',
    templateUrl: './b1.component.html',
    styleUrls: ['./b1.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => B1Component)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class B1Component extends Logger {

    public key: string = 'B1';
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

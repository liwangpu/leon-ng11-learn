import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-a2',
    templateUrl: './a2.component.html',
    styleUrls: ['./a2.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => A2Component)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class A2Component extends Logger {

    public key: string = 'A2';
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

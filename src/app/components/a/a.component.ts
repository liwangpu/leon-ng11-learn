import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { dataMap, topicFilter } from 'src/app/services/opsat.service';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-a',
    templateUrl: './a.component.html',
    styleUrls: ['./a.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => AComponent)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent extends Logger {

    public key: string = 'A';
    public myName: string;
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

        this.opsat.message$.pipe(topicFilter('user'), dataMap).subscribe(({ name }) => {
            console.log('a get user name:', name);
            this.myName = name;
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

    }
}

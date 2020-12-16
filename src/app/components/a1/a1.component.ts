import { ChangeDetectionStrategy, Component, forwardRef, Injector, SimpleChanges } from '@angular/core';
import { dataMap, topicFilter } from 'src/app/services/opsat.service';
import { Logger } from '../../models/logger';

@Component({
    selector: 'app-a1',
    templateUrl: './a1.component.html',
    styleUrls: ['./a1.component.scss'],
    providers: [
        {
            provide: Logger,
            useExisting: forwardRef(() => A1Component)
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class A1Component extends Logger {

    public key: string = 'A1';
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
            console.log('a1 get user name:', name);
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
        setTimeout(() => {
            this.myName = Date.now().toString();
            console.log('work....', this.myName);
        }, 2000);
    }

}

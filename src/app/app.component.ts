import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare const SystemJS: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    @ViewChild('containerCt', { read: ElementRef, static: true })
    public readonly containerCt: ElementRef;
    public constructor() {

    }

    public ngOnInit(): void {

    }

    public loadComponent(): void {
        SystemJS.import('/assets/elements/dynamic-components.js').then(m => {
            m.registry();
        });

    }

    public renderComponent(): void {
        // console.log(1, this.containerCt);
        const containerCtEl: HTMLElement = this.containerCt.nativeElement;
        const myCard = document.createElement('app-my-card');
        containerCtEl.appendChild(myCard);
    }
}

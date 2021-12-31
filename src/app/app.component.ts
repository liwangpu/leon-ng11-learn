import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import * as moment from 'moment';
import { forkJoin } from 'rxjs';
import { ResourceStoreService } from './services/resource-store.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

    public constructor(
        @Inject(ResourceStoreService)
        protected store: ResourceStoreService
    ) {

    }

    public ngOnInit(): void {

    }

    public clearToken(): void {
        localStorage.removeItem('token');
    }

    public async requestData(): Promise<void> {
        this.clearToken();
        const res = await this.store.getUsers().toPromise();
        console.log('res:', res);
    }

    public async batchRequestData(): Promise<void> {
        this.clearToken();
        const res = await forkJoin([
            this.store.getUsers(),
            this.store.getUsers(),
            this.store.getUsers(),
            this.store.getUsers()
        ]).toPromise();

        console.log('res:', res);
    }
}

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/commom/models';
import { SubSink } from 'subsink';
import * as fromStore from '../../../state-store';
import * as faker from "faker";
import { UserService } from 'src/app/commom/services';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, OnDestroy {

    public currentUser?: IUser;
    private subs = new SubSink();
    public constructor(
        private store: Store<fromStore.IStore>,
        private userSrv: UserService,
    ) { }

    public ngOnInit(): void {
        this.subs.sink = this.store.select(fromStore.selectCurrentUser).subscribe(us => {
            this.currentUser = us;
        });
    }

    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    public changeCurrentUsername(): void {
        this.store.dispatch(fromStore.setCurrentUsername({ username: faker.name.findName() }));
    }

    public requestAllUsers(): void {
        this.userSrv.query({ page: 1, limit: 500 }).subscribe(users => {
            this.store.dispatch(fromStore.setUsers({ users }));
        });
    }

}

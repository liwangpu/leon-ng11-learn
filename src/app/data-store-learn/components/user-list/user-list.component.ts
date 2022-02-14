import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/models';
import { UserService } from '../../services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {

  public users$: Observable<Array<IUser>>;
  public constructor(private userSrv: UserService) {
    this.users$ = this.userSrv.entities$;
  }

  public ngOnInit(): void {
  }

}

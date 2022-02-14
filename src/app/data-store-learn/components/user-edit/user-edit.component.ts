import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnInit {

  public form: FormGroup;
  public constructor(
    private fb: FormBuilder,
    private userSrv: UserService
  ) {
    this.form = this.fb.group({
      name: [],
      age: [],
      info: []
    });
  }

  public ngOnInit(): void {
  }

  public add(): void {
    this.userSrv.add(this.form.value);
  }

}

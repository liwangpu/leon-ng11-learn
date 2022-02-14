import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataStoreLearnRoutingModule } from './data-store-learn-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    UserListComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    DataStoreLearnRoutingModule,
    ReactiveFormsModule
  ]
})
export class DataStoreLearnModule { }

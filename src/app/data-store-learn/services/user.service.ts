import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { IUser } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<IUser> {

  public constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('User', serviceElementsFactory);
  }

  // create
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceStoreService {

  public url: string = 'http://localhost:3000';
  public constructor(
    private http: HttpClient
  ) { }

  public getUsers(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${this.url}/user`);
  }

  public login(): Observable<any> {
    return this.http.post<any>(`${this.url}/auth`, null);
  }

}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IUser } from '../models';
import { MOCK_SERVER_GATEWAY } from '../tokens';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public constructor(
        @Inject(MOCK_SERVER_GATEWAY)
        private mockServerGateway: string,
        private httpClient: HttpClient
    ) { }

    public query(options: { page: number, limit: number } = { page: 1, limit: 20 }) {
        return this.httpClient.get<Array<IUser>>(`${this.mockServerGateway}/users?_page=${options.page}&_limit=${options.limit}`);
    }
}

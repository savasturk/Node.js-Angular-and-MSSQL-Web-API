import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUSERINFORMATION } from '../../../../../shared_modules/models/IUserInformation';



@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    mainUrl = 'http://127.0.0.1:8080/api';
    getAll() {
        return this.http.get<IUSERINFORMATION[]>(this.mainUrl + '/userInformation/getUserInformations');
    }
/*
    getById(id: number) {
        return this.http.get('/api/getUserInformation/:UserID' + id);
    }
*/
    register(user: IUSERINFORMATION) {
        return this.http.post(this.mainUrl +'/insertUserInformations/', user);
    }
/*
    update(user: IUSERINFORMATION) {
        return this.http.put(`${config.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/` + id);
    }*/
}
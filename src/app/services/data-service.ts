import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
        this.getAllReceipes().subscribe(data => {
            console.log(data);
        });
    }

    getAllReceipes(): Observable<any> {
        return this.http.get('./assets/json/data.json');
    }
}

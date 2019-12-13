import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ItemBoxService {

    constructor(private http: HttpClient) {
        this.getAllItems().subscribe(data => {
            console.log(data);
        });
    }

    getAllItems(): Observable<any> {
        return this.http.get('./assets/json/itembox.json');
    }
}

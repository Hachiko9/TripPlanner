import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Trip} from '../models/Trip';
import {Observable} from 'rxjs';

const REST_API_SERVER = 'http://localhost:8080/api';

@Injectable({
  providedIn: 'root'
})
export class TripService {

    constructor(
        private http: HttpClient
    ) { }

    public getTrips(): Observable<any> {
        return this.http.get( `${REST_API_SERVER}/trips`);
    }

    public getTrip(tripId: string): Observable<any> {
        return this.http.get( `${REST_API_SERVER}/trips/${tripId}`);
    }

    public deleteTrip(tripId: string): Observable<any> {
        return this.http.delete( `${REST_API_SERVER}/trips/${tripId}`);
    }

    public updateTrip(trip: Trip): Observable<any> {
        return this.http.put( `${REST_API_SERVER}/trips/${trip._id}`, trip);
    }

    public createTrip(trip: Trip): Observable<any> {
        return this.http.post( `${REST_API_SERVER}/trips/new`, trip);
    }
}

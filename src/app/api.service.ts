import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Repo } from './models/repo';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ApiService {

    private readonly api = 'https://api.bitbucket.org/2.0/repositories';

    constructor( private http: HttpClient ) {
    }

    public getRepos(): Observable<Repo[]> {
        return this.http.get(this.api).pipe(
            map((res: any) => res.values),
            catchError(this.handleError)
        );
    }

    protected handleError( error: HttpErrorResponse ) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error.status_message}`);
        }
        return throwError(error);
    }
}

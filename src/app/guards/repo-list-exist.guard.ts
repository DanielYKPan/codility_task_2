/**
 * search-results-exist.guard
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { select, Store } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as repoActions from '../actions/repo';
import { ApiService } from '../api.service';

@Injectable()
export class RepoListExistGuard implements CanActivate {

    constructor( private store: Store<fromRoot.State>,
                 private apiService: ApiService ) {
    }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
        return this.hasSearchResults();
    }

    private hasSearchResults(): Observable<boolean> {
        return this.hasSearchResultsInStore().pipe(
            switchMap(( inStore: boolean ) => {
                if (inStore) {
                    return of(inStore);
                }

                return this.hasSearchResultsInApi();
            })
        );
    }

    /**
     * Check whether the search result is already in the search store.
     * */
    private hasSearchResultsInStore(): Observable<boolean> {
        return this.store.pipe(
            select(fromRoot.getAllRepo),
            map(( result: any ) => result.length > 0)
        );
    }

    /**
     * Check whether there is search result in API.
     * */
    private hasSearchResultsInApi(): Observable<boolean> {
        return this.apiService.getRepos().pipe(
            map(res => new repoActions.LoadListSuccess(res)),
            tap(action => {
                this.store.dispatch(action);
            }),
            map(res => res.payload && res.payload.length > 0),
            catchError(() => {
                // TODO: redirect to error page
                return of(false);
            })
        );
    }
}

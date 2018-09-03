import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { ApiService } from '../api.service';
import { Commit } from '../models/commit';

@Component({
    selector: 'app-task-two',
    templateUrl: './task-two.component.html',
    styleUrls: ['./task-two.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskTwoComponent implements OnInit {

    private actionsSubscription: Subscription;

    public commits$: Observable<Commit[]>;

    public displayedColumns: string[] = ['author', 'date', 'message'];

    constructor( private store: Store<fromRoot.State>,
                 private apiService: ApiService,
                 private route: ActivatedRoute ) {
    }

    ngOnInit() {
        this.commits$ = this.route.params
            .pipe(
                map(params => {
                    return {username: params.username, slug: params.slug};
                }),
                switchMap(( r ) => this.apiService.getCommits(r.username, r.slug))
            );
    }
}

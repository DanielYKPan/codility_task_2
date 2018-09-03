import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { ApiService } from '../api.service';
import { Commit } from '../models/commit';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-task-two',
    templateUrl: './task-two.component.html',
    styleUrls: ['./task-two.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskTwoComponent implements OnInit, OnDestroy {

    private actionsSubscription: Subscription;

    public dataSource: MatTableDataSource<Commit>;

    public displayedColumns: string[] = ['author', 'date', 'message'];

    @ViewChild(MatSort) sort: MatSort;

    constructor( private store: Store<fromRoot.State>,
                 private apiService: ApiService,
                 private route: ActivatedRoute,
                 private cdRef: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.actionsSubscription = this.route.params
            .pipe(
                map(params => {
                    return {username: params.username, slug: params.slug};
                }),
                switchMap(( r ) => this.apiService.getCommits(r.username, r.slug))
            ).subscribe((r) => {
                if (r.length > 0) {
                    this.dataSource = new MatTableDataSource(r);
                    this.dataSource.sort = this.sort;
                    this.cdRef.markForCheck();
                }
            });
    }

    public ngOnDestroy(): void {
        this.actionsSubscription.unsubscribe();
    }
}

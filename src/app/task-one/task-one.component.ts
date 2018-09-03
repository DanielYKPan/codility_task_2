import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repo } from '../models/repo';

import * as fromRoot from '../reducers';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
    selector: 'app-task-one',
    templateUrl: './task-one.component.html',
    styleUrls: ['./task-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskOneComponent implements OnInit {

    public repos$: Observable<Repo[]>;

    public displayedColumns: string[] = ['name', 'owner', 'create_date', 'link'];

    constructor( private store: Store<fromRoot.State>,
                 private router: Router ) {
    }

    public ngOnInit() {
        this.repos$ = this.store.pipe(select(fromRoot.getAllRepo));
    }

    public handleClickOnRow( row: Repo ) {
        console.log(row);
         this.router.navigate(['task-two/commits', row.owner.username, row.slug]);
    }
}

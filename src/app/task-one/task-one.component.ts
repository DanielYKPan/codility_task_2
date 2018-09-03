import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
    selector: 'app-task-one',
    templateUrl: './task-one.component.html',
    styleUrls: ['./task-one.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskOneComponent implements OnInit {

    constructor( private apiService: ApiService ) {
    }

    public ngOnInit() {
        this.apiService.getRepos().subscribe((r) => {
            console.log(r);
        });
    }
}

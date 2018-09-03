import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

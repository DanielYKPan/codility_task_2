import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrls: ['./task-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/**
 * app-routing.module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';

const routes: Routes = [
    {path: '', redirectTo: 'task-one', pathMatch: 'full'},
    {path: 'task-one', component: TaskOneComponent},
    {path: 'task-two', component: TaskTwoComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

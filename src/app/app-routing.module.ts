/**
 * app-routing.module
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { RepoListExistGuard } from './guards/repo-list-exist.guard';

const routes: Routes = [
    {path: '', redirectTo: 'task-one', pathMatch: 'full'},
    {path: 'task-one', component: TaskOneComponent, canActivate: [RepoListExistGuard]},
    {path: 'task-two/commits/:username/:slug', component: TaskTwoComponent, canActivate: [RepoListExistGuard]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [RepoListExistGuard]
})
export class AppRoutingModule {
}

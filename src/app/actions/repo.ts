/**
 * repo
 */

import { Action } from '@ngrx/store';
import { Repo } from '../models/repo';

export enum RepoActionTypes {
    LoadList = '[Repo] LoadList',
    LoadListSuccess = '[Repo] LoadList Success',
    Select = '[Repo] Select',
}

export class LoadList implements Action {
    readonly type = RepoActionTypes.LoadList;

    constructor() {
    }
}

export class LoadListSuccess implements Action {
    readonly type = RepoActionTypes.LoadListSuccess;

    constructor(public payload: Repo[]) {
    }
}

export class Select implements Action {
    readonly type = RepoActionTypes.Select;

    constructor( public payload: string ) {
    }
}

export type RepoActions = LoadList | LoadListSuccess | Select;

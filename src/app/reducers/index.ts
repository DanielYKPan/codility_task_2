/**
 * index
 */

import * as fromRepo from './repo';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface State {
    repo: fromRepo.State;
}

export const reducers: ActionReducerMap<State> = {
    repo: fromRepo.reducer,
};

export const getRepoState = createFeatureSelector<any>('repo');

export const {
    selectIds: getRepoIds,
    selectEntities: getRepoEntities,
    selectAll: getAllRepo,
    selectTotal: getTotalRepo,
} = fromRepo.adapter.getSelectors(getRepoState);

export const getSelectedRepoId = createSelector(
    getRepoState,
    fromRepo.getSelectedId
);

export const getSelectedRepo = createSelector(
    getRepoState,
    getSelectedRepoId,
    ( entities, selectedId ) => {
        return selectedId && entities[selectedId];
    }
);

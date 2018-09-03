/**
 * repo
 */
import { Repo } from '../models/repo';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { RepoActions, RepoActionTypes } from '../actions/repo';

export interface State extends EntityState<Repo> {
    selectedRepoId: string | null;
}

export const adapter: EntityAdapter<Repo> = createEntityAdapter<Repo>({
    selectId: repo => repo.uuid,
    sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
    selectedRepoId: null,
});

export function reducer( state = initialState, action: RepoActions ): State {
    switch (action.type) {
        case RepoActionTypes.LoadListSuccess:
            return adapter.addMany(action.payload, {
                ...state,
                selectedRepoId: state.selectedRepoId
            });

        case RepoActionTypes.Select:
            return {
                ...state,
                selectedRepoId: action.payload,
            };

        default:
            return state;
    }
}

export const getSelectedId = ( state: State ) => state.selectedRepoId;

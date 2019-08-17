import { ProgressState } from './progress.state';
import { ProgressActions, ProgressActionTypes } from './progress.actions';

const defaultState: ProgressState = {
    progresses: {}
};

export const progressReducer = (state = defaultState, action: ProgressActions) => {
    switch (action.type) {
        case ProgressActionTypes.SHOW:
            return { ...state, progresses: { ...state.progresses, [action.id]: true } };
        case ProgressActionTypes.HIDE:
            return { ...state, progresses: { ...state.progresses, [action.id]: false } };
    }

    return state;
};
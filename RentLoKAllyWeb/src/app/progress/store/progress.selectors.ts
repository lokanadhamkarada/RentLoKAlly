import { createSelector } from '@ngrx/store';

const selectProgressState = (state) => state.progressState;

/**
 * Returns true if it is required to show progress, false otherwise
 * @param progressId id of the progress to show
 */
export const showProgress = () => {
    return createSelector(selectProgressState, (state, props) => state.progresses[props.progressId]);
};
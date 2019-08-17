import { AppActionTypes } from '../../app.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { HideAction, ShowAction } from './progress.actions';

const PROGRESS_ACTIONS: { [progressId: string]: { showActions: string[], hideActions: string[] } } = {
    login_progress:
    {
        showActions: [AppActionTypes.LOGIN],
        hideActions: [AppActionTypes.LOGIN_SUCCESS, AppActionTypes.LOGIN_FAILED]
    }
};

const { showActions, hideActions } = Object.entries(PROGRESS_ACTIONS).reduce((acc, [key, value]: any) => {
    value.showActions.forEach(action => {
        acc.showActions[action] = key;
    });
    value.hideActions.forEach(action => {
        acc.hideActions[action] = key;
    });
    return acc;
}, { showActions: {}, hideActions: {} });

@Injectable()
export class ProgressEffects {
    constructor(private actions$: Actions) { }

    @Effect()
    showProgress$ = this.actions$.pipe(
        ofType(...Object.keys(showActions)),
        map(action => new ShowAction(showActions[action.type]))
    );

    @Effect()
    hideProgress$ = this.actions$.pipe(
        ofType(...Object.keys(hideActions)),
        map(action => new HideAction(hideActions[action.type]))
    );
}
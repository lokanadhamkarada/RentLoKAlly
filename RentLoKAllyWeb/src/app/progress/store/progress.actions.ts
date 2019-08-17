import { Action } from '@ngrx/store';

export enum ProgressActionTypes {
    SHOW = '[Progress] Show',
    HIDE = '[Progress] Hide'
}

export class ShowAction implements Action {
    readonly type = ProgressActionTypes.SHOW;

    constructor(public id: string) { }
}

export class HideAction implements Action {
    readonly type = ProgressActionTypes.HIDE;

    constructor(public id: string) { }
}

export type ProgressActions = ShowAction | HideAction;
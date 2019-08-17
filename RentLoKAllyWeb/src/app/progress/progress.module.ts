import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { progressReducer } from './store/progress.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProgressEffects } from './store/progress.effects';
import { ProgressDirective } from './directives/progress.directive';

@NgModule({
    declarations: [ProgressDirective],
    imports: [
        CommonModule,
        StoreModule.forFeature('progressState', progressReducer),
        EffectsModule.forFeature([ProgressEffects])
    ],
    exports: [ProgressDirective]
})

export class ProgressModule { }
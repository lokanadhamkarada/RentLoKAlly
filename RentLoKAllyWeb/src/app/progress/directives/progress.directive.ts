import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ProgressState } from '../store/progress.state';
import { showProgress } from '../store/progress.selectors';
import { ProgressConfig } from '../models/progress-config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[progressAware]'
})
export class ProgressDirective implements OnInit, OnDestroy {
    @Input('progressAware') config: ProgressConfig;
    unsubscribe$ = new Subject();

    constructor(private store: Store<ProgressState>, private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<any>) {

    }

    ngOnInit(): void {
        this.viewContainerRef.createEmbeddedView(this.templateRef);

        this.store.pipe(select(showProgress() as any, { progressId: this.config.progressId }), takeUntil(this.unsubscribe$)).subscribe(show => {
            if (show) {
                this.config.onShow && this.config.onShow();
            } else {
                this.config.onHide && this.config.onHide();
            }

            this.viewContainerRef.clear();

            if (this.config.replace) {
                if (show) {
                    this.viewContainerRef.createEmbeddedView(this.config.replaceWith);
                } else {
                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                }
            } else {
                if (show) {
                    this.viewContainerRef.createEmbeddedView(this.templateRef);
                }
            }
        });
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
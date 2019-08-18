import { OptionComponent } from './components/autocomplete/option/option.component';
import { ModalComponent } from './components/Modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-type-ahead';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FilterPipe } from './components/filter.pipe';
import { AutocompleteModule } from './components/autocomplete/autocomplete.module';
import { OverlayModule } from '@angular/cdk/overlay';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './components/alert/alert.component';
import { SearchComponent } from './components/search/search.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProgressModule } from './progress/progress.module';
import { from } from 'rxjs';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        AlertComponent,
        SearchComponent,
        ModalComponent,
        AutocompleteComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        CommonModule,
        FormsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        ProgressModule,
        TypeaheadModule,
        OverlayModule,
        AutocompleteModule,
],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents:[AutocompleteComponent]
})
export class AppModule { }

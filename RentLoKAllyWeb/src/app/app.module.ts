import { ModalComponent } from './components/Modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-type-ahead';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
        TypeaheadModule,
        NgbModule,
],
    schemas: [NO_ERRORS_SCHEMA],
    providers: [],
    exports: [SearchComponent],
    bootstrap: [AppComponent,SearchComponent],
})
export class AppModule { }

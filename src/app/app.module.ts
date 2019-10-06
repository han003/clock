import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FlexModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PunchInComponent} from './punch-in/punch-in.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {TimezoneSelectorDialogComponent} from './header/timezone-selector-dialog/timezone-selector-dialog.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule} from "@angular/material/dialog";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {UserComponent} from './user/user.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule, MAT_DATE_FORMATS} from "@angular/material/core";
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PunchInComponent,
    TimezoneSelectorDialogComponent,
    UserComponent,
  ],
  imports: [
    FlexModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
        panelClass: 'default-dialog-panel',
        disableClose: true,
        hasBackdrop: true
      },
    },
    {
      provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: ['l', 'LL'],
        },
        display: {
          dateInput: 'LL',
          monthYearLabel: 'MMM YYYY',
          dateA11yLabel: 'LL',
          monthYearA11yLabel: 'MMMM YYYY',
        },
      },
    },
    {
      provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {strict: true}
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    TimezoneSelectorDialogComponent
  ]
})
export class AppModule {
}

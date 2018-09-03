import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskOneComponent } from './task-one/task-one.component';
import { TaskTwoComponent } from './task-two/task-two.component';
import { MatButtonModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { ToDatePipe } from './pipes/date-string.pipe';

@NgModule({
    declarations: [
        AppComponent,
        TaskOneComponent,
        TaskTwoComponent,
        ToDatePipe,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,

        MatToolbarModule,
        MatButtonModule,
        MatTableModule,
        StoreModule.forRoot(reducers),
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

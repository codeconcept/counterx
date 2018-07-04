import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

/**
 * NgRx
 */
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/app.reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ appState: reducer }),
    StoreDevtoolsModule.instrument({
			name: 'CounterX devtools',
			maxAge:5
		})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

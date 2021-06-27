import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { StoreModule as NgRxStoreModule, ActionReducerMap} from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { FrutaFavoritaComponent } from './fruta-favorita/fruta-favorita.component';
import { ListaFrutasComponent } from './lista-frutas/lista-frutas.component';
import { FrutaDetalleComponent } from './fruta-detalle/fruta-detalle.component';
import { FormFrutaFavoritaComponent } from './form-fruta-favorita/form-fruta-favorita.component';
import { FrutasApiClient } from './models/fruta-api-client.model';
import { FrutaFavoritaState, reducerFrutasFavoritas, initializeFrutasFavoritasState, FrutaFavoritaEffects } from './models/fruta-favorita-state.model';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListaFrutasComponent},
  { path: 'fruta', component: FrutaDetalleComponent}
]

//redux init
export interface AppState {
  frutas: FrutaFavoritaState;
};

const reducers: ActionReducerMap<AppState> = {
   frutas: reducerFrutasFavoritas
};

let reducersInitialState = {
    frutas: initializeFrutasFavoritasState()
};
//fin redux init



@NgModule({
  declarations: [
    AppComponent,
    FrutaFavoritaComponent,
    ListaFrutasComponent,
    FrutaDetalleComponent,
    FormFrutaFavoritaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    NgRxStoreModule.forRoot(reducers,{ initialState: reducersInitialState,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      }})
    
  ],
  providers: [FrutasApiClient],
  bootstrap: [AppComponent]
})

export class AppModule { }

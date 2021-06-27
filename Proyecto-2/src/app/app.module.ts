import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FrutaFavoritaComponent } from './fruta-favorita/fruta-favorita.component';
import { ListaFrutasComponent } from './lista-frutas/lista-frutas.component';
import { FrutaDetalleComponent } from './fruta-detalle/fruta-detalle.component';
import { FormFrutaFavoritaComponent } from './form-fruta-favorita/form-fruta-favorita.component';
import { FrutasApiClient } from './models/fruta-api-client.model';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: ListaFrutasComponent},
  { path: 'fruta', component: FrutaDetalleComponent}
]

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
    ReactiveFormsModule
  ],
  providers: [FrutasApiClient],
  bootstrap: [AppComponent]
})

export class AppModule { }

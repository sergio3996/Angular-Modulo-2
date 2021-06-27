import { Injectable } from '@angular/core'
import { FrutaFavorita } from './fruta-favorita.model';

@Injectable()

export class FrutasApiClient {
	frutas: FrutaFavorita[];
	constructor() {
       this.frutas = [];
	}
	add(f:FrutaFavorita){
	  this.frutas.push(f);
	}
	getAll(){
	  return this.frutas;
    }
}
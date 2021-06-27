import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FrutaFavorita } from '../models/fruta-favorita.model';
import { FrutasApiClient } from '../models/fruta-api-client.model';


@Component({
  selector: 'app-lista-frutas',
  templateUrl: './lista-frutas.component.html',
  styleUrls: ['./lista-frutas.component.css']
})
export class ListaFrutasComponent implements OnInit {
  @Output() onItemAdded: EventEmitter<FrutaFavorita>
  
  constructor(public frutasApiClient:FrutasApiClient) {
    this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }


  agregado(f: FrutaFavorita) {
    this.frutasApiClient.add(f);
    this.onItemAdded.emit(f);
  }

  elegido(f: FrutaFavorita){
    this.frutasApiClient.getAll().forEach(function (x) {x.setSelected(false); })
    f.setSelected(true);
  }


}

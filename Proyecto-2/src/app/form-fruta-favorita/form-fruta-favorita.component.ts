import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FrutaFavorita } from '../models/fruta-favorita.model';

@Component({
  selector: 'app-form-fruta-favorita',
  templateUrl: './form-fruta-favorita.component.html',
  styleUrls: ['./form-fruta-favorita.component.css']
})
export class FormFrutaFavoritaComponent implements OnInit {
@Output() onItemAdded: EventEmitter<FrutaFavorita>
  fg: FormGroup

  constructor(fb: FormBuilder) { 
    this.onItemAdded = new EventEmitter();
    this.fg = fb.group({
      nombre: new FormControl (''),
      url: new FormControl (''),
      color: new FormControl ('')
    })
  }

  ngOnInit(): void {
  }

  guardar(nombre: string, url: string, color: string):boolean {
    const f = new FrutaFavorita(nombre, url, color);
    this.onItemAdded.emit(f);
    return false;
  }

}

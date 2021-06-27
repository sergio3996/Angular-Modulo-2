import { Component, OnInit, Input, HostBinding, Output, EventEmitter} from '@angular/core';
import { FrutaFavorita } from '../models/fruta-favorita.model';

@Component({
  selector: 'app-fruta-favorita',
  templateUrl: './fruta-favorita.component.html',
  styleUrls: ['./fruta-favorita.component.css']
})
export class FrutaFavoritaComponent implements OnInit {
  @Input() fruta!: FrutaFavorita;
  @HostBinding('attr.class') cssClass = 'col-md-4';
  @Output() clicked: EventEmitter<FrutaFavorita>;

  constructor() { 
    this.clicked = new EventEmitter();
  }

  ngOnInit(): void {
  }

  Ir(){
  this.clicked.emit(this.fruta);
  return false;
}

}

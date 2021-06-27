export class FrutaFavorita {
    
    private selected: boolean;
    
    constructor(public nombre: string, public imagenUrl: string, public color: string){}
        
        isSelected(): boolean{
            return this.selected
        }

        setSelected(s: boolean){
            this.selected = s;
        }
    
    }

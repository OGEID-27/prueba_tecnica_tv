import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CellphoneService } from '../../services/cellphone.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cellphones',
  imports: [RouterLink],
  templateUrl: './cellphones.component.html',
  styleUrl: './cellphones.component.css'
})
export class CellphonesComponent implements OnInit{

  listCellphones: any[] = [];

  inputFilter: string = '';

  alert: boolean = false;

  constructor(private _cellphoneService: CellphoneService){}

  ngOnInit(): void {
    this.obtenerCelulares()
    
  }

  obtenerCelulares(){
    this._cellphoneService.getcellphone().subscribe(data => {
      this.listCellphones = data
    })
  }

  filtroCelulares(){
    return this.listCellphones.filter(celular => 
      celular.name.toLowerCase().includes(this.inputFilter.toLowerCase()),
    );
  }

  update(event: any){
    this.inputFilter = event.target.value;
  }

  // Eliminar
  eliminarCell(id: number){
   // this._cellphoneService.deletecell(id).subscribe(() => {
      this.alert = true;
      const resultado = this.listCellphones.filter(lista => lista.id != id)
      this.listCellphones = resultado
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 4000);
    //})
  }

}

import { Component, OnInit } from '@angular/core';
import { CellphoneService } from '../../services/cellphone.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-ver-cellphone',
  imports: [NgFor, NgIf],
  templateUrl: './ver-cellphone.component.html',
  styleUrl: './ver-cellphone.component.css'
})
export class VerCellphoneComponent implements OnInit{

  elemento: any = {};
  datacell: any = [];
  dataNull: boolean = false;
  idCell?: number;

  constructor(private _serviceCellphone: CellphoneService, private aRouter: ActivatedRoute) {
    this.idCell = Number(this.aRouter.snapshot.paramMap.get('id')) // Obtener id de la url
  }

  ngOnInit(): void {
    this.obtenerCelular()
    
  }

  obtenerCelular(){
    this._serviceCellphone.getcell(this.idCell).subscribe(data => {
      this.elemento = data
      if(this.elemento.data == null){ // En caso de que el valor sea nulo
        this.dataNull = true;
      } else{ // En caso de que el valor no sea nulo
        this.datacell = Object.entries(data.data)
      }

      console.log(this.elemento)
    })
  }

}

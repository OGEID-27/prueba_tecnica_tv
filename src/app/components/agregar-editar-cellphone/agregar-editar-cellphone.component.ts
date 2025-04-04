import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms'
import { CellphoneService } from '../../services/cellphone.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-agregar-editar-cellphone',
  imports: [FormsModule, ReactiveFormsModule, NgClass],
  templateUrl: './agregar-editar-cellphone.component.html',
  styleUrl: './agregar-editar-cellphone.component.css'
})
export class AgregarEditarCellphoneComponent implements OnInit {

  fomularioCelular!: FormGroup
  valorformulari: object = {};
  idCell: number;
  titulo: String = '';
  titulo2: String = '';
  boton: String = '';
  alert: boolean = false;
  claseBoton: String = '';

  constructor(private fb: FormBuilder, private _serviceCellphone: CellphoneService, private aRouter: ActivatedRoute){
    this.fomularioCelular = this.fb.group({
      name: ['', Validators.required],
      Generation: ['', Validators.required],
      Price: ['', Validators.required],
      Capacity: ['', Validators.required],
    })

    this.idCell = Number(this.aRouter.snapshot.paramMap.get('id')) // Obtener id de la url
  }

  ngOnInit(): void {
    if (this.idCell > 0){ // editar
      this.titulo = 'EDITAR'
      this.titulo2 = 'EDITADO'
      this.boton = 'GUARDAR'
      this.claseBoton = 'btn-info'
      this.obtenercell()

    } else { // agregar
      this.titulo = 'AGREGAR'
      this.titulo2 = 'AGREGADO'
      this.boton = 'AGREGAR'
      this.claseBoton = 'btn-success'
    }
  }

  agregar(form: object){
    this.alert = false;
    this._serviceCellphone.agregarcell(form).subscribe(data =>{
      this.alert = true;
      console.log('Se realizo correctamente la peticion')
    })
    setTimeout(() => {
      this.alert = false;
    }, 4000);
  }

  obtenercell(){
    this.alert = false;

    this._serviceCellphone.getcell(this.idCell).subscribe(data => {
      console.log(data)
      let generation = ''
      let price = 0
      let capacity = ''

      if ("data" in data){
        if ("Generation" in data.data){
           generation = data.data.Generation
        } else{
           generation = 'Sin valor'
        }

        if ("Price" in data.data){
           price = data.data.Price
        }else {
           price = 0;
        }

        if("Capacity" in data.data){
           capacity = data.data.Capacity
        } else {
           capacity = 'Sin valor'
        }
      } else {
         generation = 'Sin valor'
         price = 0;
         capacity = 'Sin valor'
      }

      this.fomularioCelular.setValue({
        name: data.name,
        Generation: generation,
        Price: price,
        Capacity: capacity
      })
    })
    setTimeout(() => {
      this.alert = false;
    }, 4000);
  }


  agregarEditar(){
    if(this.fomularioCelular?.valid){
      const form = this.fomularioCelular.value

      this.valorformulari = {
        name: form.name,
        data: {
          Generation: form.Generation,
          Price: String(form.Price),
          Capacity: form.Capacity
        }
      }

      if (this.idCell> 0){ // editar
        

      } else { // agregar
        this.agregar(this.valorformulari)
      }
      //console.log(this.valorformulari)

    } else{
      console.log('No es valido')
      this.fomularioCelular.markAllAsTouched()
    }

  }

}

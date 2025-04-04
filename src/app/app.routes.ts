import { Routes } from '@angular/router';
import { CellphonesComponent } from './components/cellphones/cellphones.component';
import { AgregarEditarCellphoneComponent } from './components/agregar-editar-cellphone/agregar-editar-cellphone.component';
import { VerCellphoneComponent } from './components/ver-cellphone/ver-cellphone.component';

export const routes: Routes = [
    // Listado
    {path: 'listacellphones', component: CellphonesComponent}, 

    // Agregar
    {path: 'agregarcellphone', component: AgregarEditarCellphoneComponent},
    // Editar
    {path: 'editarcellphone/:id', component: AgregarEditarCellphoneComponent},

    // Ver
    {path: 'vercellphone/:id',  component: VerCellphoneComponent},

    {path: '', redirectTo: 'listacellphones', pathMatch: 'full'}
];

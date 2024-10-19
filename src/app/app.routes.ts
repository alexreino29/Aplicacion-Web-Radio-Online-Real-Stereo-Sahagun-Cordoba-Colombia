import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'quienes-somos', component: QuienesSomosComponent},
    {path: '', redirectTo: '', pathMatch: 'full'}
];

import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

export const routes: Routes = [
    {path:'' , component:CounterComponent, pathMatch:'full'},
    {path:'counter' , component:CounterComponent, pathMatch:'full'}
];

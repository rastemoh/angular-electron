import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecordsListComponent } from './components/records-list/records-list.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {path: 'home', component: HomeComponent},
    {path: 'records', component: RecordsListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

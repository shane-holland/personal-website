import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import { ConstructionComponent } from './views/construction/construction.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: ConstructionComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);

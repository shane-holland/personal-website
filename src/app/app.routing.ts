import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ConstructionComponent } from './views/construction/construction.component';
import { HomeComponent } from './views/home/home.component';
import { AboutMeComponent } from './views/about-me/about-me.component';
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
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: 'portfolio',
        component: NotFoundComponent
    },
    {
        path: 'resume',
        component: NotFoundComponent
    },
    {
        path: 'contact-me',
        component: NotFoundComponent
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

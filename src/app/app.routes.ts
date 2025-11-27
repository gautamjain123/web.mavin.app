import { Routes } from '@angular/router';
import { MainPageComponent } from './website/pages/main-page/main-page.component';

export const routes: Routes = [
        {
        path: '',
        component: MainPageComponent,
        children: [
            {
                path: '',
                // component:IasHomepageComponent,
                loadComponent: () => import('./website/pages/main-page/mavin-webpage/mavin-webpage.component').then(m => m.MavinWebpageComponent)
            },
            {
                path: 'contact-us',
                // component:IasHomepageComponent,
                loadComponent: () => import('./website/pages/contact-us-page/contact-us-page.component').then(m => m.ContactUsPageComponent)
            },
            {
                path: 'products',
                // component:IasHomepageComponent,
                loadComponent: () => import('./website/pages/products/products.component').then(m => m.ProductsComponent)
            },
            {
                path: 'product-details/:id',
                // component:IasHomepageComponent,
                loadComponent: () => import('./website/pages/product-details/product-details.component').then(m => m.ProductDetailsComponent)
            },

        ],
    },
    // {
    //     path: 'login',
    //     canActivate: [noAuthGuard],
    //     component: IasLoginComponent,
    // },
];

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
    // {
    //     path: '',
    //     component: EmptyRouteComponent
    // },
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    // { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            // relativeLinkResolution: 'corrected',
            errorHandler(...arg) {
                console.log('errorHandler', ...arg);
            },
            // @ts-ignore
            malformedUriErrorHandler(...arg) {
                console.log('malformedUriErrorHandler', ...arg);
            },
        }),
    ],
    exports: [RouterModule],
    providers: [{ provide: APP_BASE_HREF, useValue: window['__POWERED_BY_QIANKUN__'] ? '/app1' : '/' }]
})
export class AppRoutingModule { }

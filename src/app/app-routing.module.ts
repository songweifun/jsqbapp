import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared';
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";

const routes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule', //// 懒加载子模块, 子模块需要配置路由设置启动子组件
        canActivate: [AuthGuard]
    },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{preloadingStrategy: SelectivePreloadingStrategy,useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }

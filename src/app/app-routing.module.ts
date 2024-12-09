import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortalComponent } from './shared/components/portal/portal.component';
import { appRoutingURL } from './shared/configs/app-routing-url.config';
import { ProfileComponent } from './user/profile/profile.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: appRoutingURL.USER_PAGE,
    canActivate: [AuthGuardService],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: appRoutingURL.NOT_FOUND
      },
      {
        path: appRoutingURL.NOT_FOUND,
        component: PageNotFoundComponent
      },
      {
        path: appRoutingURL.DASHBOARD_PAGE,
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: appRoutingURL.CUSTOMER_PAGE,
        loadChildren: () => import('./customer/customer.module').then((m) => m.CustomerModule)
      },
      {
        path: appRoutingURL.PROFILE_PAGE,
        component: ProfileComponent
      },
      {
        path: '**', component: PageNotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

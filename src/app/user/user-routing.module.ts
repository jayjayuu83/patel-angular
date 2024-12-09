import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutingURL } from '../shared/configs/app-routing-url.config';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: appRoutingURL.REGISTER_PAGE,
        component: RegisterComponent,
        data: {
          title: 'Register'
        }
      },
      {
        path: appRoutingURL.PROFILE_PAGE,
        component: ProfileComponent,
        data: {
          title: 'Profile'
        }
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class UserRoutingModule { }

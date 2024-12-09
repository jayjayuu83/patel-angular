import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [RegisterComponent, ProfileComponent],
  imports: [
    CommonModule, UserRoutingModule, SharedModule
  ]
})
export class UserModule { }

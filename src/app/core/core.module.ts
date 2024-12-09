import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CustomerModule } from '../customer/customer.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserModule } from '../user/user.module';
import { AuthGuardService } from './guards/auth-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CustomerModule,
    DashboardModule,
    UserModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthGuardService
  ]
})
export class CoreModule { }

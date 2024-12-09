import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  imports: [
    CommonModule, CustomerRoutingModule, SharedModule
  ],
  declarations: [CustomerCreateComponent, CustomerOverviewComponent],
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { appRoutingURL } from '../shared/configs/app-routing-url.config';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: appRoutingURL.CUSTOMER_OVERVIEW,
        component: CustomerOverviewComponent,
        data: {
          title: 'Customer Overview'
        }
      },
      {
        path: appRoutingURL.CUSTOMER_CREATE,
        component: CustomerCreateComponent,
        data: {
          title: 'Customer Create'
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

export class CustomerRoutingModule { }

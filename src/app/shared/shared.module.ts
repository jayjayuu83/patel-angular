import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
// import { MomentModule } from 'angular2-moment'; // optional, provides moment-style pipes for date formatting
import { ModalModule } from 'ngx-bootstrap/modal';
import { AuthService } from '../core/authentication/auth.service';
import { AuthInterceptor } from '../core/interceptor/auth.interceptor';
import { LoginComponent } from '../login/login.component';
import { ControlSidebarComponent } from '../main/control-sidebar/control-sidebar.component';
import { FooterComponent } from '../main/footer/footer.component';
import { HeaderComponent } from '../main/header/header.component';
import { MainSidebarComponent } from '../main/main-sidebar/main-sidebar.component';
import { MenuItemComponent } from '../main/main-sidebar/menu-item/menu-item.component';
import { MainComponent } from '../main/main.component';
import { HomeComponent } from '../pages/home/home.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { PagerComponent } from './components/grid/paging/pager/pager.component';
import { PaginationInfoComponent } from './components/grid/paging/pagination-info/pagination-info.component';
import { PaginationSizeComponent } from './components/grid/paging/pagination-size/pagination-size.component';
import { PaginationComponent } from './components/grid/paging/pagination/pagination.component';
import { PagingComponent } from './components/grid/paging/paging.component';
import { PagingService } from './components/grid/paging/paging.service';
import { LoaderComponent } from './components/loader/loader.component';
import { ConfirmationPopupComponent } from './components/popup/confirmation-popup/confirmation-popup.component';
import { FormatdatePipe } from './pipes/formatdate.pipe';
import { PortalComponent } from './components/portal/portal.component';
import { UserInfoComponent } from 'app/user/user-info/user-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    // MomentModule,
  ],
  exports: [
    FormsModule,
    PortalComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    MenuItemComponent,
    ControlSidebarComponent,
    UserInfoComponent,
    HomeComponent,
    PageNotFoundComponent,
    PagingComponent,
    PaginationComponent,
    LoaderComponent,
    FormatdatePipe,
    ConfirmationPopupComponent,
  ],
  declarations: [
    PortalComponent,
    MainComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    MenuItemComponent,
    ControlSidebarComponent,
    UserInfoComponent,
    HomeComponent,
    PageNotFoundComponent,
    PagingComponent,
    PagerComponent,
    PaginationComponent,
    PaginationInfoComponent,
    PaginationSizeComponent,
    LoaderComponent,
    FormatdatePipe,
    ConfirmationPopupComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    PagingService,
    AuthService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule {}

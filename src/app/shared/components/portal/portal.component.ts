import { Component, OnInit, ViewChild } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
// import {
//   BsModalRef,
//   BsModalService,
//   ModalDirective
// } from 'ngx-bootstrap/modal';
import { AuthService } from '../../../core/authentication/auth.service';
import { MenuItemModel } from '../../../main/main-sidebar/menu-item/menu-item.model';
import { appRoutingURL } from '../../configs/app-routing-url.config';
import { appSetting } from '../../configs/app-setting.config';
import { RoutingUrlService } from '../../services/routing-url.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  providers: [RoutingUrlService],
  standalone: false
})
export class PortalComponent implements OnInit {
  menuItems: MenuItemModel[];
  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'TimeOut Confirmation';
  logOutButtonText = 'LogOut';
  stayButtonText = 'Stay';

  public modalRef: any;

  @ViewChild('confirmationPopup', { static: false })
  confirmationPopup: any;

  //LoaderService is for the spinner
  constructor(
    private idle: Idle,
    private keepalive: Keepalive,
    private routingurlService: RoutingUrlService,
    private authService: AuthService
  ) {
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(appSetting.SESSION.INACTIVITY_SESSION_TIMEOUT);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(appSetting.SESSION.TIMEOUT_IN_SECONDS_TIME);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => {
      this.reset();
    });

    idle.onTimeout.subscribe(() => {
      this.confirmationPopup.hide();
      this.idleState = 'Timed out!';
      this.timedOut = true;
      this.authService.SignOut();
    });

    idle.onIdleStart.subscribe(() => {
      this.idleState = "You've gone idle!";
      this.confirmationPopup.show();
    });

    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!';
    });

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => (this.lastPing = new Date()));

    if (this.authService.isLoggedIn()) {
      idle.watch();
      this.timedOut = false;
    } else {
      idle.stop();
    }
  }

  ngOnInit() {
    this.createMenu();
  }

  reset() {
    this.idle.watch();
    this.timedOut = false;
  }

  hideConfirmationPopup(): void {
    this.confirmationPopup.hide();
  }

  stay() {
    this.confirmationPopup.hide();
    this.reset();
  }

  logout() {
    this.confirmationPopup.hide();
    this.authService.SignOut();
  }

  private createMenu() {
    this.menuItems = [
      {
        title: 'Dashboard',
        icon: 'nav-icon fas fa-tachometer-alt',
        redirectUrl: this.routingurlService.merge(
          appRoutingURL.DASHBOARD_PAGE
        ),
      },
      {
        title: 'Customer',
        icon: 'nav-icon fas fa-user',
        redirectUrl: this.routingurlService.merge(
          appRoutingURL.CUSTOMER_PAGE,
          appRoutingURL.CUSTOMER_OVERVIEW
        ),
      },
      {
        title: 'Report',
        icon: 'nav-icon fas fa-file',
        redirectUrl: null,
        subMenuItems: [
          {
            title: 'Payment Report',
            icon: 'nav-icon fas fa--circle-o',
            redirectUrl: this.routingurlService.merge(
              appRoutingURL.REPORT_PAGE,
              appRoutingURL.PAYMENT_REPORT_PAGE
            ),
          },
        ],
      },
    ];
  }
}

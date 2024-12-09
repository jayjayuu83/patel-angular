import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  userName: string;
  constructor(private authService: AuthService) { }

  signOut() {
    this.authService.SignOut();
  }

  ngOnInit() {
    this.userName = this.authService.getUserName();
  }

}

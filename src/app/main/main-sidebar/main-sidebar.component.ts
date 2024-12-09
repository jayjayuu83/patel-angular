import { Component, Input, OnInit } from '@angular/core';
import { MenuItemModel } from './menu-item/menu-item.model';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.scss'],
  standalone: false
})
export class MainSidebarComponent implements OnInit {
  @Input()
  menuItems: MenuItemModel[];

  constructor() { }

  ngOnInit() {
  }

}

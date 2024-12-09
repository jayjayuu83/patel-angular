import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  standalone: false
})
export class MenuItemComponent implements OnInit, OnChanges {

  @HostBinding('class.treeview')
  isTreeView: boolean;

  @HostBinding('class.menu-open')
  isMenuOpen: boolean;

  @HostBinding('class.active')
  isActive: boolean;

  @Input()
  menuItem: MenuItemModel;

  private isSubMenuOpen: boolean;

  constructor(private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.isTreeView = this.hasSubMenuItems();
  }

  ngOnInit() { }

  hasSubMenuItems() {
    return this.menuItem && !!this.menuItem.subMenuItems;
  }

  menuClick() {
    if (this.hasSubMenuItems()) {
      this.isMenuOpen = !this.isMenuOpen;
      this.isSubMenuOpen = !this.isSubMenuOpen;
    }
    else if (this.menuItem.redirectUrl) {
      this.router.navigateByUrl(this.menuItem.redirectUrl);
    }
  }
}

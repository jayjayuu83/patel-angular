import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PagingService } from './paging.service';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss'],
  standalone: false
})
export class PagingComponent implements OnInit {

  @Input() totalRecords: number = 0;
  @Input() recordsPerPage: number = 0;
  @Input() items: any = [];
  @Output() pagedItems: EventEmitter<any[]> = new EventEmitter();

  // pager object
  pager: any = {};

  constructor(private pagerService: PagingService) { }

  ngOnInit() {
    this.setPage(1);
  }

  setPage(page: number) {
    if (this.items && this.items.length) {
      // get pager object from service
      this.pager = this.pagerService.getPager(this.items.length, page);
      // get current page of items
      this.pagedItems.emit(this.items.slice(this.pager.startIndex, this.pager.endIndex + 1));
    }
  }
}

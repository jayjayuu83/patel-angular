import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
// import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss'],
  standalone: false
})
export class ConfirmationPopupComponent implements OnInit {
  config: any = {
    backdrop: 'static',
  };

  @ViewChild('popup')
  popup: any;

  private eventData: any;

  @Input()
  title = 'Confirmation';

  @Input()
  message = 'Are you sure you wants to delete this record ?';

  @Input()
  confirmationButtonText = 'Confirm';

  @Input()
  closeButtonText = 'Close';

  @Output()
  confirmed = new EventEmitter();

  @Output()
  closed = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngOnDestroy(): void {
    this.hide();
  }

  show($event: any) {
    this.eventData = $event;
    this.popup.show();
  }

  hide() {
    this.popup.hide();
  }

  onConfirmed() {
    this.confirmed.emit(this.eventData);
    this.hide();
  }

  onClosed() {
    this.closed.emit(this.eventData);
    this.hide();
  }
}

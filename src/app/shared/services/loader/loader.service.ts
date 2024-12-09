import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  private loaderObservers = new BehaviorSubject<boolean>(false);
  public loaderSubject = new BehaviorSubject<boolean>(false);
  public showLoader = this.loaderSubject.asObservable().pipe();

  isLoading = this.loaderObservers.asObservable();

  constructor() { }

  show() {
    this.loaderObservers.next(true);
  }

  hide() {
    this.loaderObservers.next(false);
  }

  currentState(): boolean {
    return this.loaderObservers.getValue();
  }
}

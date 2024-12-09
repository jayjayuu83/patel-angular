import { Injectable } from '@angular/core';

@Injectable()
export class RoutingUrlService {

  constructor() { }

  public merge(...path: string[]) {
    let mergePath = '';
    for (let i = 0; i < path.length; i++) {
      mergePath += '/' + path[i];
    }
    return mergePath;
  }

  public replace(path: string, params: { actual: string; replace: any }[]) {
    for (let i = 0; i < params.length; i++) {
      const paramItem = params[i];
      path = path.replace(paramItem.actual, paramItem.replace);
    }
    return path;
  }
}

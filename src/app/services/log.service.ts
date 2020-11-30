import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

import { Log } from '../models/log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: undefined,
    text: null,
    date: null,
  });
  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: '1',
        text: 'Genereated components',
        date: new Date('12/26/2017 12:54:23'),
      },
      {
        id: '2',
        text: 'Added Bootstrap',
        date: new Date('12/27/2017 09:33:23'),
      },
      {
        id: '3',
        text: 'Added logs component',
        date: new Date('12/27/2017 12:00:23'),
      },
    ];
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}

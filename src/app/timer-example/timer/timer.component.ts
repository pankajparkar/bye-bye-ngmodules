import { Component, OnInit, ɵmarkDirty, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

import { tap } from 'rxjs/operators';
import { Unsubscriber } from '../unsubsribce.hoc';


@Unsubscriber(['counterSubscription'])
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {

  private counterSubscription: Subscription;
  public counter: number;

  constructor() { }

  ngOnInit() {
    this.counterSubscription = timer(0, 1000)
    .pipe(tap(console.log))
    .subscribe(c => {
      this.counter = c;
    });
  }

  ngOnDestroy() {
    console.log('counter stopped at ' + this.counter);
  }

}

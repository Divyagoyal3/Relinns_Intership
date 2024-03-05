// consumer.component.ts

import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProducerComponent } from '../producer/producer.component';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnDestroy {
  values: string[] = [];
  private destroy$ = new Subject<void>();

  constructor(private producer: ProducerComponent) {
    this.producer.subject.pipe(
      takeUntil(this.destroy$)
    ).subscribe(value => {
      this.values.push(value);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}




// producer.component.ts

import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent {
  subject = new Subject<string>();

  emitValue(value: string): void {
    this.subject.next(value);
  }
}


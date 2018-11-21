import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-order-by',
  templateUrl: './order-by.component.html',
  styleUrls: ['./order-by.component.css']
})
export class OrderByComponent implements OnInit {
  @Input() keys: Array<string>;

  constructor() { }

  ngOnInit() {
  }
  @Output()
  orderBy: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(value) {
    this.orderBy.emit(value);
  }

}

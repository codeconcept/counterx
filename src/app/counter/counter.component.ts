import { Component, OnInit } from "@angular/core";
// import { catchError } from 'rxjs/operators';

import { Store, select } from "@ngrx/store";
import { of } from "rxjs";

@Component({
  selector: "cc-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  total = 0;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.pipe(select("appState")).subscribe(data => {
      console.log(data);
      this.total = data.count;
    });
  }

  increment() {
    this.store.dispatch({ type: "INCREMENT", payload: 1 });
  }

  decrement() {
    this.store.dispatch({ type: "DECREMENT", payload: 1 });
  }
}

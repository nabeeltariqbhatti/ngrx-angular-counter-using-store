import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Appstate } from './store/app.state';
import { getLoading } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-counter';
  showLoading:Observable<boolean>;
  constructor(private store:Store<Appstate>){}

  ngOnInit() {
    this.showLoading=this.store.select(getLoading)
  }
}
